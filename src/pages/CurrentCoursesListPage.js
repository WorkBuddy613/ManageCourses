import React, { Component } from "react";
import { BrowserRouter, Link, Route,} from 'react-router-dom';
import CurrentCourse from "./CurrentCourse";
import { listCourses } from '../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';

async function listCurrentCourses(){ 
  const allCourses = await API.graphql(graphqlOperation(listCourses));
  console.log("Fetch current courses from database successfully", allCourses);
  return allCourses;
}

class CurrentCoursesListPage extends Component {
    constructor(props) {
    super(props);
    this.state = {
        select_id:"",
        instructor_username: this.props.instructor_uname,
        courseList:[]
    };

    listCurrentCourses().then((evt) => {
      evt.data.listCourses.items.map((course, i) => {
          this.state.courseList.push({
            course_id: course.id, 
            course_title: course.title,
            course_instructor: course.instructor
          });
      });
      this.setState({
          courseList: this.state.courseList
      })
   }); 
  
  }

  render() {
    //console.log("COurse Id is", this.state.select_id);
    return (
      <div> 
        <h2> My Teaching Courses </h2>
          <div>
            <label>Select your course:</label>
            <select value={this.state.value} onChange={event =>this.setState({select_id: event.target.value})}>
            <option>{"NONE"}</option>
            {this.state.courseList.map((Course,i) => {return Course.course_instructor === this.state.instructor_username ? (<option className="option" key={i} value={Course.course_id}>{Course.course_title}</option>) : ""})}
            </select>
            <BrowserRouter>
              <Link to="/CurrentCourseListPage/CurrentCourse"><button className="In-Modal-button" type="button" disabled={!(this.state.select_id)}>Update</button></Link>
              <Route path="/CurrentCourseListPage/CurrentCourse" component={()=><CurrentCourse courseID={this.state.select_id}/>}/>
            </BrowserRouter>
          </div>
      </div>
    );
  
}
}
export default CurrentCoursesListPage;