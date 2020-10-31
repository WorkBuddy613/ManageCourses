import React, { Component } from "react";
import ReactModal from 'react-modal-resizable-draggable';
import {LessonIterator} from './../../components/LessonIterator';

 
class Lessons extends Component {
  constructor() {
  super();
  this.state = {
    add_description: "",
    lesson_add:"",
    add_link:"",
    remove_id: 0,
    description: "",
    title:"",
    link: "",
    select_id:0,
    modalIsOpen: false,
    EditmodalIsOpen: false,
    LessonList:[{id:0},{id :Math.random + 31, lesson: "Lesson 01", videoLink: "www.youtube.com", text: "Sure, we just talked about branching out beyond the bench press. But you can't avoid the exercise if you're serious about training—or even if you just step foot into any typical strength facility in the world. The move is standard for a reason: it works."},{id: Math.random + 541, lesson: "Lesson 02" , videoLink: "www.youtube.com",text:"Lay on a flat bench, gripping dumbbells in each hand. Press the weights up above your chest, keeping them from touching, with your pinkies turned slightly inward. Maintain full body tension on the bench"}, {id:Math.random+1434, lesson: "Lesson 03" , videoLink: "https://www.youtube.com/watch?v=mfTnowfhW2c", text: "Lift your dumbbells up, squeezing the handles tightly. Once your back is on the bench, don't just hold the weights with your elbows parallel to your shoulders. Keep your elbows at a 45-degree angle to help to keep your shoulders safe. Squeeze your chest to drive the weight up, then lower under control under the same path to just above your chest. Drive back up to hit another rep."}]
  };

  
  this.openModal = this.openModal.bind(this);
  this.closeModal = this.closeModal.bind(this);
  this.openEditModal = this.openEditModal.bind(this);
  this.closeEditModal = this.closeEditModal.bind(this);
  this.addLesson =this.addLesson.bind(this);
  this.removeLesson =this.removeLesson.bind(this);
  this.updateLesson =this.updateLesson.bind(this);
  
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
  var key = 1+ Math.floor(Math.random() * (100000-1));
  this.setState({LessonList :this.state.LessonList.concat({id: Math.random + key,lesson: this.state.lesson_add, videoLink: this.state.add_link, text:this.state.add_description})});
  this.setState({add_description:""});
  this.setState({add_link:""});
  this.setState({lesson_add:""});
}

removeLesson() {
    const newLessonList = this.state.LessonList.filter(lesson => lesson.id !== this.state.remove_id);
    this.setState({LessonList: newLessonList});
    this.setState({remove_id:0});
}

updateLesson(){
  this.setState({LessonList: this.state.LessonList.map(el => (el.id === this.state.select_id ? {...el, text: this.state.description, videoLink: this.state.link, lesson: this.state.title} : el))});
  this.setState({description:""});
  this.setState({link: ""});
  this.setState({title: ""});
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
                      <div><button className="In-Modal-button" type="button" onClick={this.addLesson} disabled={!(this.state.add_description)}> Add </button></div>
              </div>
              <div>
                <label> Remove Lesson</label>
                <select value={this.state.value} onChange={event =>this.setState({ remove_id: event.target.value})}>
                  {this.state.LessonList.map(Lesson => (<option key={Lesson.id} value={Lesson.id} >{Lesson.lesson}</option>))}
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
              {this.state.LessonList.map(Lesson => (<option className="option" key={Lesson.id} value={Lesson.id}>{Lesson.lesson}</option>))}
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
            <div><button  className="In-Modal-button" type= "button" onClick={this.updateLesson} disabled={!(this.state.select_id)}> Update </button></div>
            <div><button className="Modal-close-button" onClick={this.closeEditModal}> Done </button></div>
      </ReactModal></div>
      <h2> Lessons </h2>
      {this.state.LessonList.map((Lesson) => <LessonIterator id={Lesson.id} videoLink={Lesson.videoLink} title={Lesson.lesson} text={Lesson.text}/>)}
    </div>
  );
}
}

 
export default Lessons;