import React, { Component } from "react";
import ReactModal from 'react-modal-resizable-draggable';
import {LessonIterator} from '../../components/LessonIterator';
import { API, graphqlOperation } from 'aws-amplify';
import { createLesson, updateLesson} from '../../graphql/mutations';
import { listLessons } from '../../graphql/queries';

async function createNewLesson(lesson){
    console.log("in createNewLesson", lesson);
    const newLessonDetails = { 
      title: lesson.title,
      likeCount: 0,
      videoLink: lesson.videoLink,
      content: lesson.content,
      courseID: lesson.courseID
      
      //courseId, course, comments is now empty
    };
    console.log(newLessonDetails);
    const newLesson = await API.graphql(graphqlOperation(createLesson, {input: newLessonDetails}));  
    /*
    createLesson learning note:
    1. AppSync will generate created&updatedAt automatically here 
    2. graphqlOperation is a helper function. 
    Without it, it wil look more verbose like ⬇️: //But seems fine haha
    const newTodo = awiat API.graphql({ query: createTodo, variable: {input: todoDetails}})  
    */    
    console.log("new Lesson created in database successfully", newLesson);
}

async function listCurrentLessons(){ 
    const allLessons = await API.graphql(graphqlOperation(listLessons));
    console.log("Fetch current lessons from database successfully", allLessons);
    return allLessons;
}

class AddLessons extends Component {
  constructor() {
  super();
  this.state = {
    add_description: "",
    lesson_add:"",
    add_link:"",
    modalIsOpen: false,
    LessonList:[]
  };
    listCurrentLessons().then((evt) => {
      evt.data.listLessons.items.map((lesson, i) => {
          this.state.LessonList.push({
            lesson_id: lesson.id, 
            lesson_description: lesson.content,
            lesson_title: lesson.title,
            lesson_videolink: lesson.videoLink,
            lesson_courseId: lesson.courseID
          });
      });
      this.setState({
          LessonList: this.state.LessonList
      })
   }); 
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
  var lesson = {
    title: this.state.lesson_add,
    videoLink: this.state.add_link,
    content: this.state.add_description,
    courseID: this.props.NewCourseId_Lesson
  }
  createNewLesson(lesson);
  // var key = 1+ Math.floor(Math.random() * (100000-1));
  this.setState({LessonList :this.state.LessonList.concat({lesson_courseId: this.props.NewCourseId_Lesson,lesson_title: this.state.lesson_add, lesson_videolink: this.state.add_link, lesson_description:this.state.add_description})});
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
    {this.state.LessonList.map((Lesson,i) => {return Lesson.lesson_courseId === this.props.NewCourseId_Lesson ? <LessonIterator id={Lesson.lesson_id} videoLink={Lesson.lesson_videolink} title={Lesson.lesson_title} text={Lesson.lesson_description}/>: ""})}
    </div>
  );
}
}
 
export default AddLessons;