import React, { Component } from "react";
import { API, graphqlOperation } from 'aws-amplify';
import { createCourse, updateCourse, deleteCourse} from '../graphql/mutations';
import { listCourses } from '../graphql/queries';

async function deleteSelectedCourse(course){
  console.log("in deleteSelectedCourse", course);
  const deleteCourseDetails = { 
    id: course.courseID
  };
  console.log(deleteCourseDetails);
  const deletedCourse = await API.graphql(graphqlOperation(deleteCourse, {input: deleteCourseDetails}));    
  console.log(" course removed in database successfully", deletedCourse);
}

async function listCurrentCourses(){ 
  const allCourses = await API.graphql(graphqlOperation(listCourses));
  console.log("Fetch current courses from database successfully", allCourses);
  return allCourses;
}


class RemoveCourse extends Component {
    constructor() {
    super();
    
    this.state = {
        remove_id:0,
        courseList:[]
    };
    listCurrentCourses().then((evt) => {
      evt.data.listCourses.items.map((course, i) => {
          this.state.courseList.push({
            course_id: course.id, 
            course_title: course.title,
          });
      });
      this.setState({
          courseList: this.state.courseList
      })
   }); 
    console.log("LIST@", this.state.courseList)
    this.removeCourse = this.removeCourse.bind(this);
  
  }

  removeCourse() {
    var course = {
      courseID: this.state.remove_id
    }
    deleteSelectedCourse(course);
    var newCourseList = this.state.courseList.filter(Course => Course.course_id !== this.state.remove_id);
    this.setState({remove_id:0});
    this.setState({courseList: newCourseList});
}

  render() {
    console.log("LIsT", this.state.courseList);
    return (
      <div> 
        <h2> My Teaching Courses </h2>
          <div>
            <label>Select a course:</label>
            <select value={this.state.value} onChange={event =>this.setState({remove_id: event.target.value})}>
              {this.state.courseList.map((Course,i) => (<option className="option" key={i} value={Course.course_id}>{Course.course_title}</option>))}
            </select>
            <div><button className="In-Modal-button" type="button" onClick={this.removeCourse} disabled={!(this.state.remove_id)}> Remove </button></div>
          </div>
      </div>
    );
  
}
}
export default RemoveCourse;