import React, { Component } from "react";
import ReactModal from 'react-modal-resizable-draggable';
import {LessonIterator} from './../../components/LessonIterator';

 
class AddLessons extends Component {
  constructor() {
  super();
  this.state = {
    add_description: "",
    lesson_add:"",
    add_link:"",
    modalIsOpen: false,
    LessonList:[{id:0}]};

  
  this.openModal = this.openModal.bind(this);
  this.closeModal = this.closeModal.bind(this);
  this.addLesson =this.addLesson.bind(this);
  
}

openModal() {
  this.setState({modalIsOpen: true});
}

closeModal() {
  this.setState({modalIsOpen: false});
}

addLesson() {
  var key = 1+ Math.floor(Math.random() * (100000-1));
  this.setState({LessonList :this.state.LessonList.concat({id: Math.random + key,lesson: this.state.lesson_add, videoLink: this.state.add_link, text:this.state.add_description})});
  this.setState({add_description:""});
  this.setState({add_link:""});
  this.setState({lesson_add:""});
}


render() {
  return (
    <div className="Lesson-page">
      <button className="Modal-open-button" onClick={this.openModal}> Add Lesson </button>
      <ReactModal onFocus={() => console.log("Modal is clicked")} className={"adding-course-lesson-page"} onRequestClose={this.closeModal}  isOpen={this.state.modalIsOpen}>
                  <h3>Add Lesson</h3>
                      <div>
                      <label>Add Lesson:</label>
                      <input className="lesson-area" type="text" value={this.state.lesson_add} onChange={event =>this.setState({ lesson_add: event.target.value })}/>
                      </div>
                      <div>
                      <label>Add Lesson Video Link:</label>
                      <input className="lesson-link-area" type="text" value={this.state.add_link} onChange={event =>this.setState({add_link: event.target.value })}/>
                      </div>
                      <div>
                      <label>Add Lesson Description:</label>
                      <input className="lesson-text-area" type="textarea" value={this.state.add_description} onChange={event =>this.setState({ add_description: event.target.value })}/>
                      </div>
                      <div><button className="In-Modal-button" type="button" onClick={this.addLesson} disabled={!(this.state.add_description)}> Add </button></div>
                      <div><button className="Modal-close-button" onClick={this.closeModal}> Done </button></div>       
      </ReactModal>
      <h2> Lessons </h2>
      {this.state.LessonList.map((Lesson) => <LessonIterator id={Lesson.id} videoLink={Lesson.videoLink} title={Lesson.lesson} text={Lesson.text}/>)}
    </div>
  );
}
}
 
export default AddLessons;