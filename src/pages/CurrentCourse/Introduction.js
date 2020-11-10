/* eslint-disable no-lone-blocks */
import React, { Component } from "react";
import ReactModal from 'react-modal-resizable-draggable';
import { API, graphqlOperation } from 'aws-amplify';
import { createCourse, updateCourse} from '../../graphql/mutations';
import { listCourses } from '../../graphql/queries';


async function createNewCourse(course){
    console.log("in createNewCourse", course);
    const newCourseDetails = { 
      title: course.title,
      introduction: course.introduction,
      syllabus: ""
      //courseId, course, comments is now empty
    };
    console.log(newCourseDetails);
    const newCourse = await API.graphql(graphqlOperation(createCourse, {input: newCourseDetails}));    
    console.log("new Course created in database successfully", newCourse);
}

class Introduction extends Component {

    constructor() {
        super();

        this.state = {
            modalIsOpen: false,
            id: 2313+ Math.random,
            title: "Chest and Arms Workout",
            new_title: "",
            Subscription: false,
            image : "https://image.winudf.com/v2/image/Y29tLmJvdWF6emFvdWkuY2hlc3R3b3Jrb3V0X3NjcmVlbl8wX3V5ZGdoMmd0/screen-0.jpg?fakeurl=1&type=.jpg",
            new_image: "",
            Total_Enrollments : 547,
            Description: "If you want to mix your leg workout with some cardio and core work, this routine is a must-try. The circuit, created by ACE-certified personal trainer Amy Eisinger, starts with a leg-blasting curtsy lunge to lateral lunge combo, before going into a skater (agility and balance work!) and then some core moves.",
            new_Description: "",
            tag_id:0,
            tag_name:"",
            Tags:[{id:0, name:""},{id: 23394 + Math.random, name:"Accessbility"}]
        };


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
        createNewCourse({
            title: this.state.title,
            introduction: this.state.description,
        });
        this.setState({modalIsOpen: false});
    }
    addTag() {
        var key = 1+ Math.floor(Math.random() * (100000-1));
        this.setState({Tags :this.state.Tags.concat({id: Math.random + key, name: this.state.tag_name})});
        this.setState({tag_id:0});
        this.setState({tag_name:""});
    } 
    removeTag() {
        const newTags = this.state.Tags.filter(Tag => Tag.id !== this.state.tag_id);
        this.setState({Tags: newTags});
        this.setState({tag_id:0});
    }
    updateIntroduction(){
        // eslint-disable-next-line no-lone-blocks
         createNewCourse({
            title: this.state.title,
            introduction: this.state.description,
        });
        {this.state.new_title ? this.setState({title: this.state.new_title}) : this.setState({new_title: ""})};
        {this.state.new_image ? this.setState({image: this.state.new_image}) : this.setState({new_title: ""})};
        {this.state.new_Description ? this.setState({Description: this.state.new_Description}) : this.setState({new_Description: ""})};
    }


    render() {
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
                            <select value={this.state.value} onChange={event =>this.setState({ tag_id: event.target.value})}>
                            {this.state.Tags.map(Tag => (<option key={Tag.id} value={Tag.id} >{Tag.name}</option>))}
                            </select>
                            <div><button  className="In-Modal-button" type="button" onClick={this.removeTag} disabled={!this.state.tag_id}> Remove </button></div>
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
                        {this.state.Tags.map(Tag => <li key={Tag.id}><p>{Tag.name}</p></li>)}
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