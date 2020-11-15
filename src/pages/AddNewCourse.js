import React, { Component } from "react";
import "./AddNewCourse.css";
import {
    Route,
    NavLink,
    BrowserRouter
  } from "react-router-dom";
import AddIntroduction from "./AddNewCourse/AddIntroduction";
import AddAnnouncements from "./AddNewCourse/AddAnnouncements";
import AddSyllabus from "./AddNewCourse/AddSyllabus";
import AddLessons from "./AddNewCourse/AddLessons";

  class AddNewCourse extends Component {

    constructor(props) {
      super(props);
      this.state = {
          modalIsOpen:false,
          CourseID: this.props.CourseId
      };    
     }
    
    render() {
      console.log("ID is")
      console.log(this.props.CourseId)
      return (
        <BrowserRouter>
          <div>
            <ul className="AddCourseheader">
              <li><NavLink to="/AddNewCourse/AddIntroduction">Introduction</NavLink></li>
              <li><NavLink to="/AddNewCourse/AddSyllabus">Syllabus</NavLink></li>
              <li><NavLink to="/AddNewCourse/AddAnnouncements">Announcements </NavLink> </li>
              <li><NavLink to="/AddNewCourse/AddLessons">Lessons</NavLink></li>
            </ul>
            <div className="AddCoursecontent">
              <Route path="/AddNewCourse/AddIntroduction" component={() => <AddIntroduction NewCourseId_Introduction= {this.state.CourseID}/>}/>
              <Route path="/AddNewCourse/AddAnnouncements" component={() => <AddAnnouncements NewCourseId_Announcements= {this.state.CourseID}/>}/>
              <Route path="/AddNewCourse/AddLessons" component={() => <AddLessons NewCourseId_Lesson= {this.state.CourseID}/>}/>
              <Route path="/AddNewCourse/AddSyllabus" component={() => <AddSyllabus NewCourseId_Syllabus= {this.state.CourseID}/>}/>
            </div>
          </div>
        </BrowserRouter>
      );
    }
  }
   
export default AddNewCourse;