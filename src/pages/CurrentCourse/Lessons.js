import React, { Component } from "react";
import ReactModal from 'react-modal-resizable-draggable';
import {LessonIterator} from './../../components/LessonIterator';
import { API, graphqlOperation } from 'aws-amplify';
import { createLesson, updateLesson, deleteLesson} from '../../graphql/mutations';
import { listLessons, getLesson } from '../../graphql/queries';

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

async function updateSelectedLesson(updateSelectedLesson){
  console.log("in updateSelectedLesson");
  const updateSelectedLessonDetails = { 
    id: updateSelectedLesson.id,
    title: updateSelectedLesson.title,
    content: updateSelectedLesson.content,
    videoLink: updateSelectedLesson.videoLink
    //comments is now empty
  };
  console.log(updateSelectedLessonDetails);
  const updatedLesson = await API.graphql(graphqlOperation(updateLesson, {input: updateSelectedLessonDetails}));    
  console.log(" Course Lesson is updated in database successfully", updatedLesson);
}

async function listCurrentLessons(){ 
    console.log("in listcurrentlessons");
    const allLessons = await API.graphql(graphqlOperation(listLessons));
    console.log("Fetch current lessons list from database successfully", allLessons);
    return allLessons;
}

async function deleteSelectedLesson(removelesson){
  console.log("in deleteSelectedLesson", removelesson);
  const deleteLessonDetails = { 
    id: removelesson.ID
  };
  console.log(deleteLessonDetails);
  const deletedLesson = await API.graphql(graphqlOperation(deleteLesson, {input: deleteLessonDetails}));    
  console.log(" Lesson removed in database successfully", deletedLesson);
}

async function getSelectedLesson(LessonFetching_LessonID){ 
  console.log("in getSelectedLesson");
  const LessonFetched = await API.graphql(graphqlOperation(getLesson, {id: LessonFetching_LessonID}));
  console.log("Fetch current selected Lesson from database successfully", LessonFetched);
  return LessonFetched;
}
 
class Lessons extends Component {
  constructor() {
  super();
  this.state = {
    add_description: "",
    lesson_add:"",
    add_link:"",
    remove_id: "",
    description: "",
    title:"",
    link: "",
    select_id:"",
    fetched_Description: "",
    fetched_Title: "",
    fetched_Link: "",
    modalIsOpen: false,
    EditmodalIsOpen: false,
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
  this.openEditModal = this.openEditModal.bind(this);
  this.closeEditModal = this.closeEditModal.bind(this);
  this.addLesson =this.addLesson.bind(this);
  this.removeLesson =this.removeLesson.bind(this);
  this.EditLesson =this.EditLesson.bind(this);
  this.GettingLesson = this.GettingLesson.bind(this);
  
}
openEditModal() {
  this.setState({EditmodalIsOpen: true});
}

closeEditModal() {
  this.setState({EditmodalIsOpen: false});
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
    courseID: this.props.CourseId_Lesson
  }
  createNewLesson(lesson);
  // var key = 1+ Math.floor(Math.random() * (100000-1));
  this.setState({LessonList :this.state.LessonList.concat({lesson_courseId: this.props.CourseId_Lesson,lesson_title: this.state.lesson_add, lesson_videolink: this.state.add_link, lesson_description:this.state.add_description})});
  this.setState({add_description:""});
  this.setState({add_link:""});
  this.setState({lesson_add:""});
}

removeLesson() {
  var removelesson = {
    ID: this.state.remove_id
  }
  deleteSelectedLesson(removelesson);
  const newLessonList = this.state.LessonList.filter(lesson => lesson.lesson_id !== this.state.remove_id);
  this.setState({LessonList: newLessonList});
  this.setState({remove_id:""});
}

GettingLesson(){
  getSelectedLesson(this.state.select_id).then((evt) => 
  this.setState({fetched_Title: evt.data.getLesson.title , fetched_Link:evt.data.getLesson.videoLink, fetched_Description: evt.data.getLesson.content})
  );
  setTimeout(() =>{this.EditLesson()},2000);
}

EditLesson(){
  console.log(this.state.select_id);
  var Edited_Title= this.state.title === "" ? this.state.fetched_Title : this.state.title;
  var Edited_Link= this.state.link === "" ? this.state.fetched_Link : this.state.link;
  var Edited_Description= this.state.description === "" ? this.state.fetched_Description : this.state.description;
  var SelectedLesson= {
    id: this.state.select_id,
    title: Edited_Title,
    videoLink: Edited_Link,
    content: Edited_Description
  }
  updateSelectedLesson(SelectedLesson);
  this.setState({LessonList: this.state.LessonList.map(el => (el.lesson_id === this.state.select_id ? {...el, lesson_description: Edited_Description, lesson_videolink: Edited_Link, lesson_title: Edited_Title} : el))});
  this.setState({description:""});
  this.setState({link: ""});
  this.setState({title: ""});
  this.setState({select_id:""});
  this.setState({fetched_Description:""});
  this.setState({fetched_Link: ""});
  this.setState({fetched_Title: ""});
  this.setState({select_id:""});
}

render() {
  return (
    <div className="Lesson-page">
      <button className="Modal-open-button" onClick={this.openModal}> Add/Remove Lesson </button>
      <button className="Modal-open-button" onClick={this.openEditModal}> Edit Lesson </button>
      <div><ReactModal initHeight={500} onFocus={() => console.log("Modal is clicked")} className={"adding-course-lesson-page"} onRequestClose={this.closeModal}  isOpen={this.state.modalIsOpen}>
          <h3>Add/Remove Lesson</h3>
              <div>
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
                      <div><button className="In-Modal-button" type="button" onClick={this.addLesson} disabled={!(this.state.lesson_add)}> Add </button></div>
              </div>
              <div>
                <label> Remove Lesson</label>
                <select value={this.state.value} onChange={event =>this.setState({ remove_id: event.target.value})}>
                  <option>{"NONE"}</option>
                  {this.state.LessonList.map((Lesson,i) => {return Lesson.lesson_courseId === this.props.CourseId_Lesson ? (<option key={i} value={Lesson.lesson_id} >{Lesson.lesson_title}</option>) : ""})}
                </select>
                <div><button  className="In-Modal-button" type="button" onClick={this.removeLesson} disabled={!this.state.remove_id}> Remove </button></div>
              </div>
              <div><button className="Modal-close-button" onClick={this.closeModal}> Done </button></div>
      </ReactModal></div>
    
      <div><ReactModal initHeight={500} onFocus={() => console.log("Modal is clicked")} className={"adding-course-lesson-page"} onRequestClose={this.closeEditModal}  isOpen={this.state.EditmodalIsOpen}>
            <h3>Update/Edit a Lesson</h3>
            <div>
              <label> Select A Lesson</label>
              <select value={this.state.value} onChange={event =>this.setState({select_id: event.target.value})}>
                <option>{"NONE"}</option>
               {this.state.LessonList.map((Lesson,i) => {return Lesson.lesson_courseId === this.props.CourseId_Lesson ? (<option key={i} value={Lesson.lesson_id} >{Lesson.lesson_title}</option>) : ""})}
              </select>
            </div>
            <div>
              <label>Update Lesson Title:</label>
              <input className="lesson-title-area" type="text" value={this.state.title} onChange={event => this.setState({title: event.target.value})}/>
            </div>
            <div>
              <label>Update Lesson Video Link:</label>
              <input className="lesson-link-area" type="text" value={this.state.link} onChange={event => this.setState({link: event.target.value})}/>
            </div>
            <div>
              <label>Update Lesson Description:</label>
              <input className="lesson-text-area" type="textarea" value={this.state.description} onChange={event => this.setState({description: event.target.value})}/>
            </div>
            <div><button  className="In-Modal-button" type= "button" onClick={this.GettingLesson} disabled={!(this.state.select_id)}> Update </button></div>
            <div><button className="Modal-close-button" onClick={this.closeEditModal}> Done </button></div>
      </ReactModal></div>
      <h2> Lessons </h2>
      {this.state.LessonList.map((Lesson,i) => {return Lesson.lesson_courseId === this.props.CourseId_Lesson ? <LessonIterator id={Lesson.lesson_id} videoLink={Lesson.lesson_videolink} title={Lesson.lesson_title} text={Lesson.lesson_description}/>: ""})}
    </div>
  );
}
}

 
export default Lessons;