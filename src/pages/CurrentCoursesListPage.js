import React, { Component } from "react";
import { BrowserRouter, HashRouter, Link, Route,} from 'react-router-dom';
import CurrentCourse from "./CurrentCourse";

class CurrentCoursesListPage extends Component {
    constructor(props) {
    super(props);
    this.state = {
        select_id:0,
        courses:[{id:0},{id:1 + Math.random, name: "Chest Workout"}]
    };
  
  }

  render() {
    return (
      <div> 
        <h2> My Teaching Courses </h2>
          <div>
            <label>Select your course:</label>
            <select value={this.state.value} onChange={event =>this.setState({select_id: event.target.value})}>
              {this.state.courses.map(Course => (<option className="option" key={Course.id} value={Course.id}>{Course.name}</option>))}
            </select>
            <BrowserRouter>
              <Link to="/CurrentCourseListPage/CurrentCourse"><button className="In-Modal-button" type="button" disabled={!(this.state.select_id)}>Update</button></Link>
              <Route path="/CurrentCourseListPage/CurrentCourse" component={()=><CurrentCourse/>}/>
            </BrowserRouter>
          </div>
      </div>
    );
  
}
}
export default CurrentCoursesListPage;