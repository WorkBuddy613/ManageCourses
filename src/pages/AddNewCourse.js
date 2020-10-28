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

    constructor() {
      super();
      this.state = {
          modalIsOpen:false,
      };      
     }
    
    render() {
      return (
        <BrowserRouter>
          <div>
            <ul className="header">
              <li><NavLink to="/AddNewCourse/AddIntroduction">Introduction</NavLink></li>
              <li><NavLink to="/AddNewCourse/AddSyllabus">Syllabus</NavLink></li>
              <li><NavLink to="/AddNewCourse/AddAnnouncements">Announcements </NavLink> </li>
              <li><NavLink to="/AddNewCourse/AddLessons">Lessons</NavLink></li>
            </ul>
            <div className="content">
              <Route path="/AddNewCourse/AddIntroduction" component={AddIntroduction}/>
              <Route path="/AddNewCourse/AddAnnouncements" component={AddAnnouncements}/>
              <Route path="/AddNewCourse/AddLessons" component={AddLessons}/>
              <Route path="/AddNewCourse/AddSyllabus" component={AddSyllabus}/>
            </div>
          </div>
        </BrowserRouter>
      );
    }
  }
   
export default AddNewCourse;