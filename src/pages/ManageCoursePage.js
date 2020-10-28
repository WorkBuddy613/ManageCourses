import React, { Component } from "react";
import Logo from "./../asset/WorkBuddyLogo.PNG";
import './ManageCoursePage.css';
import {
    Route,
    NavLink,
    BrowserRouter
  } from "react-router-dom";
import CurrentCoursesListPage from "./CurrentCoursesListPage";
import AddNewCourse from "./AddNewCourse";
import RemoveCourse from "./RemoveCourse";
  
class ManageCoursePage extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <img src={Logo} alt="Logo" height={150}/>
          <ul className="ManageCoursePageheader">
            <li><NavLink to="/AddNewCourse">Add New Course</NavLink></li>
            <li><NavLink to="/CurrentCoursesListPage">Edit Current Course</NavLink></li>
            <li><NavLink to="/RemoveCourse">Remove a Course</NavLink></li>
          </ul>
          <div className="ManageCoursePagecontent">
            <Route path="/AddNewCourse" component={() => <AddNewCourse CourseList={this.props.Courses}/>}/>
            <Route path="/CurrentCoursesListPage" component={() => <CurrentCoursesListPage CourseList={this.props.Courses}/>}/>
            <Route path="/RemoveCourse" component={() => <RemoveCourse CourseList={this.props.Courses}/>}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
 
export default ManageCoursePage;