import React, { Component } from "react";
import ReactModal from 'react-modal-resizable-draggable';
import { API, graphqlOperation } from 'aws-amplify';
import { createCourse, updateCourse} from '../../graphql/mutations';
import { listCourses } from '../../graphql/queries';


// const updatedTodoDetails = { id: "id1", description:"Updated todo info"};
// const updatedTodo = await API.graphql(graphqlOperation(updateTodo, {input: updatedTodoDetails}));


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

class AddSyllabus extends Component {

    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            text:"",
            newText: ""
        };
        
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.addSyllabus = this.addSyllabus.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }
    closeModal() {
        this.setState({modalIsOpen: false});
    }
    addSyllabus(){
        var CourseSyllabus = {
            CourseID: this.props.NewCourseId_Syllabus,
            syllabus: this.state.newText
          }
        updateSelectedCourse(CourseSyllabus);
        this.setState({text: this.state.newText});
        this.setState({newText: ""});
    }

    render() {
        return (
            <div>
                <button className="Modal-open-button" onClick={this.openModal}> Add Course Syllabus </button>
                <ReactModal onFocus={() => console.log("Modal is clicked")} className={"editing-course-syllabus-page"} onRequestClose={this.closeModal}  isOpen={this.state.modalIsOpen}>
                    <div>
                    <label>Add/Edit Syllabus </label>
                    <input className="Syllabus-area" type="textarea" value={this.state.newText} onChange={event => this.setState({newText: event.target.value})}/>
                    <div><button className="In-Modal-button" onClick={this.addSyllabus}>Add</button></div>
                    <div><button className="Modal-close-button" onClick={this.closeModal}> Cancel </button></div>
                    </div>
                </ReactModal>
                <div>
                    <h2>Syllabus</h2>
                    <p>{this.state.text}</p>
                </div>
            </div>
        );
    }
}

export default AddSyllabus