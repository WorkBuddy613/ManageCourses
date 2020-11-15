import React, { Component } from "react";

class RemoveCourse extends Component {
    constructor(props) {
    super(props);
    
    this.state = {
        remove_id:0,
        courses:[{id:0},{id:1 + Math.random, name: "Chest Workout"}]
    };
    
    this.removeCourse = this.removeCourse.bind(this);
  
  }

  removeCourse() {
    var newCourseList = this.state.courses.filter(Course => Course.id !== this.state.remove_id);
    this.setState({remove_id:0});
    this.setState({courses: newCourseList});
}

  render() {
    return (
      <div> 
        <h2> My Teaching Courses </h2>
          <div>
            <label>Select a course:</label>
            <select value={this.state.value} onChange={event =>this.setState({remove_id: event.target.value})}>
              {this.state.courses.map((Course,i) => (<option className="option" key={i} value={Course.id}>{Course.name}</option>))}
            </select>
            <div><button className="In-Modal-button" type="button" onClick={this.removeCourse} disabled={!(this.state.remove_id)}> Remove </button></div>
          </div>
      </div>
    );
  
}
}
export default RemoveCourse;