import React, { Component } from "react";
import "./CurrentCourse.css";
import {
    Route,
    NavLink,
    BrowserRouter
  } from "react-router-dom";
  import Introduction from "./CurrentCourse/Introduction";
  import Announcements from "./CurrentCourse/Announcements";
  import Syllabus from "./CurrentCourse/Syllabus";
  import Lessons from "./CurrentCourse/Lessons";
    
  class CurrentCourse extends Component {
    render() {
      //console.log("COurse Id is", this.props.courseID);
      return (
        <BrowserRouter>
          <div>
            <ul className="header">
              <li><NavLink to="/CurrentCourseListPage/CurrentCourse/Introduction">Introduction</NavLink></li>
              <li><NavLink to="/CurrentCourseListPage/CurrentCourse/Syllabus">Syllabus</NavLink></li>
              <li><NavLink to="/CurrentCourseListPage/CurrentCourse/Announcements">Announcements </NavLink> </li>
              <li><NavLink to="/CurrentCourseListPage/CurrentCourse/Lessons">Lessons</NavLink></li>
            </ul>
            <div className="content">
              <Route path="/CurrentCourseListPage/CurrentCourse/Introduction" component={() => <Introduction CourseId_Introduction={this.props.courseID}/>}/>
              <Route path="/CurrentCourseListPage/CurrentCourse/Announcements" component={() => <Announcements CourseId_Announcements={this.props.courseID}/>}/>
              <Route path="/CurrentCourseListPage/CurrentCourse/Lessons" component={() => <Lessons CourseId_Lesson={this.props.courseID}/>}/>
              <Route path="/CurrentCourseListPage/CurrentCourse/Syllabus" component={() => <Syllabus CourseId_Syllabus={this.props.courseID}/>}/>
            </div>
          </div>
        </BrowserRouter>
      );
    }
  }
   
export default CurrentCourse;