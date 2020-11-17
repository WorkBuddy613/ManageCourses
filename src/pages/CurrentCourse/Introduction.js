import React, { Component } from "react";
import ReactModal from 'react-modal-resizable-draggable';

import { API, graphqlOperation } from 'aws-amplify';
import { createCourse, updateCourse, createTag, deleteTag} from '../../graphql/mutations';
import { getCourse, listTags } from '../../graphql/queries';

async function updateSelectedCourse(CourseIntroduction){
    console.log("in UpdateSelectedCourse");
    const updatedCourseIntroductionDetails = { 
      id: CourseIntroduction.CourseID,
      title: CourseIntroduction.title,
      introduction: CourseIntroduction.introduction,
      imagelink: CourseIntroduction.imagelink
      //comments is now empty
    };
    console.log(updatedCourseIntroductionDetails);
    const updatedCourse = await API.graphql(graphqlOperation(updateCourse, {input: updatedCourseIntroductionDetails}));    
    console.log("Course Introduction updated in database successfully", updatedCourse);
  }

  async function CreateCourseTags(CourseTags){
    console.log("in CreateCourseTags");
    const CreateCourseTagsDetails = { 
      courseID: CourseTags.CourseID,
      content: CourseTags.Tag
    };
    console.log(CreateCourseTagsDetails);
    const createdTag = await API.graphql(graphqlOperation(createTag, {input: CreateCourseTagsDetails}));    
    console.log("The Course Tags are created in database successfully", createdTag);
  }

  async function listCurrentTags(){ 
    console.log("in listCurrentTags");
    const allTags = await API.graphql(graphqlOperation(listTags));
    console.log("Fetch current Tags list from database successfully", allTags);
    return allTags;
}
  
  async function deleteSelectedTag(removeTag){
    console.log("in deleteSelectedTag", removeTag);
    const deleteTagDetails = { 
      id: removeTag.ID
    };
    console.log(deleteTagDetails);
    const deletedTag = await API.graphql(graphqlOperation(deleteTag, {input: deleteTagDetails}));    
    console.log(" Tag removed in database successfully", deletedTag);
  }

  async function getCourseIntroduction(CourseIntroductionFetching_CourseID){ 
    console.log("in getCourseIntroduction");
    const CourseIntroductionFetched = await API.graphql(graphqlOperation(getCourse, {id: CourseIntroductionFetching_CourseID}));
    console.log("Fetch current courses Introduction from database successfully", CourseIntroductionFetched);
    return CourseIntroductionFetched;
  }

class Introduction extends Component {

    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: false,
            title: "",
            new_title: "",
            Subscription: false,
            image : "",
            new_image: "",
            Total_Enrollments : 0,
            Description: "",
            new_Description: "",
            tag_name:"",
            tag_remove_id:"",
            TagsList:[]
        };

        listCurrentTags().then((evt) => {
            evt.data.listTags.items.map((Tag, i) => {
                this.state.TagsList.push({
                  tag_id: Tag.id, 
                  tag_name: Tag.content,
                  tag_courseId: Tag.courseID
                });
            });
            this.setState({
                TagsList: this.state.TagsList
            })
         }); 

        getCourseIntroduction(this.props.CourseId_Introduction).then((evt) => 
            this.setState({title: evt.data.getCourse.title , image:evt.data.getCourse.imagelink, Description: evt.data.getCourse.introduction, Tags: evt.data.getCourse.tags})
        )

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.addTag = this.addTag.bind(this);
        this.removeTag = this.removeTag.bind(this);
        this.updateIntroduction = this.updateIntroduction.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }
    closeModal() {
        this.setState({modalIsOpen: false});
    }
    addTag() {
        console.log("Tag are", this.state.TagsList);
        var CourseTags = {
            CourseID: this.props.CourseId_Introduction,
            Tag: this.state.tag_name
        }
        CreateCourseTags(CourseTags);
        this.setState({TagsList :this.state.TagsList.concat({tag_courseId: this.props.CourseId_Introduction, tag_name: this.state.tag_name})});
        //console.log("Tag are 2", this.state.TagsList);
        this.setState({tag_name:""});
    } 

    removeTag() {
        var removeTag = {
            ID: this.state.tag_remove_id
          }
          deleteSelectedTag(removeTag);
        const newTags = this.state.TagsList.filter(Tag => Tag.tag_id !== this.state.tag_remove_id);
        this.setState({TagsList: newTags});
        this.setState({tag_remove_id:""});
    }
    
    updateIntroduction(){
        var CourseIntroduction = {
            CourseID: this.props.CourseId_Introduction,
            title:this.state.new_title === "" ? this.state.title :this.state.new_title,
            imagelink: this.state.new_image  === "" ? this.state.image : this.state.new_image,
            introduction: this.state.new_Description  === "" ? this.state.Description :this.state.new_Description
          }
        updateSelectedCourse(CourseIntroduction);
        this.setState({title: this.state.new_title === "" ? this.state.title :this.state.new_title});
        this.setState({image: this.state.new_image  === "" ? this.state.image : this.state.new_image});
        this.setState({Description: this.state.new_Description  === "" ? this.state.Description :this.state.new_Description});
        this.setState({new_title: ""});
        this.setState({new_image: ""});
        this.setState({new_Description: ""});
    }


    render() {
        //console.log("COurse Id is", this.props.courseId);
        return (
            <div className="Intro_Page">
                <button className="Modal-open-button" onClick={this.openModal}> Edit Course Introduction </button>
                <ReactModal initHeight={600} onFocus={() => console.log("Modal is clicked")} className={"editing-course-intro-page"} onRequestClose={this.closeModal}  isOpen={this.state.modalIsOpen}>
                    <h3>Edit Course Information</h3>
                    <div className="intro-form-group">
                        <div>
                        <label>Edit Title:</label>
                        <input type="text" className="Edit_Title" value={this.state.new_title} onChange={e => this.setState({new_title: e.target.value})}/>
                        </div>
                        <div>
                        <label>Enter Image URL:</label>
                        <input type="text" className="Edit_image_url" value={this.state.new_image} onChange={e => this.setState({new_image: e.target.value})}/>
                        </div>
                        <div>
                        <label>Edit Description:</label>
                        <input type="textarea" className="Edit_Description" value={this.state.new_Description} onChange={e => this.setState({new_Description: e.target.value})}/>
                        </div>
                        <div><button  className="In-Modal-button" type="button" onClick={this.updateIntroduction} > Update </button></div>
                        <div>
                            <label>Add Tag:</label>
                            <input type="text" className="Tag" value={this.state.tag_name} onChange={e => this.setState({tag_name: e.target.value})}/>
                            <div><button  className="In-Modal-button" type="button" onClick={this.addTag} disabled={!this.state.tag_name}> Add </button></div>
                        </div>
                        <div>
                            <label>Remove Tag: </label>
                            <select value={this.state.value} onChange={event =>this.setState({ tag_remove_id: event.target.value})}>
                            <option>{"NONE"}</option>
                            {this.state.TagsList.map((Tag,i) => {return Tag.tag_courseId === this.props.CourseId_Introduction ? (<option key={i} value={Tag.tag_id} >{Tag.tag_name}</option>): ""})}
                            </select>
                            <div><button  className="In-Modal-button" type="button" onClick={this.removeTag} disabled={!this.state.tag_remove_id}> Remove </button></div>
                        </div>
                    </div>
                    <button className="Modal-close-button" onClick={this.closeModal}> Done </button>
                </ReactModal>
                <div className = "intro_view_page">
                <h2>{this.state.title}</h2>
                    <img src = {this.state.image} alt = "IntroductionPageImage" />
                    <div>
                    <label> Tags: </label>
                    <ul className="Tags">
                        {this.state.TagsList.map((Tag,i) => {return Tag.tag_courseId === this.props.CourseId_Introduction ? <li key={i}><p>{Tag.tag_name}</p></li> : ""})}
                    </ul>
                    </div>
                    <h4 class="pos-left">Total Enrollments are {this.state.Total_Enrollments}</h4>
                    <h2>Overview</h2>
                    <p>{this.state.Description}</p>
                </div>
            </div>
        );
    }
}

export default Introduction;