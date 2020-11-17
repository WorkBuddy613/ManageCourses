import React, { Component } from "react";
import ReactModal from 'react-modal-resizable-draggable';
import { API, graphqlOperation } from 'aws-amplify';
import { createCourse, updateCourse} from '../../graphql/mutations';
import { getCourse } from '../../graphql/queries';

async function updateSelectedCourse(CourseSyllabus){
    console.log("in UpdateSelectedCourse");
    const updatedCourseSyllabusDetails = { 
      id: CourseSyllabus.CourseID,
      syllabus: CourseSyllabus.syllabus
    };
    console.log(updatedCourseSyllabusDetails);
    const updatedCourse = await API.graphql(graphqlOperation(updateCourse, {input: updatedCourseSyllabusDetails}));    
    console.log("new Course Syllabus created in database successfully", updatedCourse);
  }

async function getCourseSyllabus(CourseSyllabusFetching_CourseID){ 
    console.log("in getCourseSyllabus");
    const CourseSyllabusFetched = await API.graphql(graphqlOperation(getCourse, {id: CourseSyllabusFetching_CourseID}));
    console.log("Fetch current courses syllabus from database successfully", CourseSyllabusFetched);
    return CourseSyllabusFetched;
  }

class Syllabus extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text:"",
            newText:"",
            modalIsOpen:false
        };

        getCourseSyllabus(this.props.CourseId_Syllabus).then((evt) => 
            this.setState({text: evt.data.getCourse.syllabus})
        )
        
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.updateSyllabus = this.updateSyllabus.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }
    
    closeModal() {
        this.setState({modalIsOpen: false});
    }
    
    updateSyllabus(){
        var CourseSyllabus = {
            CourseID: this.props.CourseId_Syllabus,
            syllabus:this.state.newText === "" ? this.state.text :this.state.newText
          }
        updateSelectedCourse(CourseSyllabus)
        this.setState({text: this.state.newText === "" ? this.state.text :this.state.newText});
        this.setState({newText: ""});
    }


    render() {
        return (
            <div>
                <button className="Modal-open-button" onClick={this.openModal}> Edit Course Syllabus </button>
                <ReactModal onFocus={() => console.log("Modal is clicked")} className={"editing-course-syllabus-page"} onRequestClose={this.closeModal}  isOpen={this.state.modalIsOpen}>
                    <div>
                    <label>Edit Syllabus </label>
                    <input className="Syllabus-area" type="textarea" value={this.state.newText} onChange={event => this.setState({newText: event.target.value})}/>
                    <div><button className="In-Modal-button" onClick={this.updateSyllabus}>Update</button></div>
                    <div><button className="Modal-close-button" onClick={this.closeModal}> Cancel </button></div>
                    </div>
                </ReactModal>
                <div>
                    <h2>Syllabus</h2>
                    <div><p>{this.state.text}</p></div>
                </div>
            </div>
        );
    }
}

export default Syllabus