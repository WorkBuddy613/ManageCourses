import React, { Component } from "react";
import Logo from "./../asset/WorkBuddyLogo.PNG";
import './ManageCoursePage.css';
import {
    Route,
    Link,
    BrowserRouter
  } from "react-router-dom";
import CurrentCoursesListPage from "./CurrentCoursesListPage";
import AddNewCourse from "./AddNewCourse";
import RemoveCourse from "./RemoveCourse";
import Amplify, { Auth } from 'aws-amplify';   
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'; 
import awsconfig from '../aws-exports';
import { API, graphqlOperation } from 'aws-amplify';
import { createCourse, updateCourse} from '../graphql/mutations';
import { listCourses } from '../graphql/queries';

Amplify.configure(awsconfig);

async function createNewCourse(instructor_username){
  console.log("in createNewCourse");
  const newCourseDetails = { 
    title: "",
    introduction: "",
    syllabus: "",
    instructor: instructor_username
    //courseId, course, comments is now empty
  };
  console.log(newCourseDetails);
  const newCourse = await API.graphql(graphqlOperation(createCourse, {input: newCourseDetails}));    
  console.log("new Course created in database successfully", newCourse);
  const result = await newCourse.data.createCourse.id
  console.log(result);
  return result;
}

class ManageCoursePage extends Component {
  constructor (){
    super();
    this.state = {
        addNewCourseId:"",
        instructor_username:""
    }

    Auth.currentAuthenticatedUser({
      bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
  }).then(user => {
      console.log(user);
      this.setState({
        instructor_username: user.username  //this will get current username
          })
      })
  .catch(err => console.log(err));
  /*Note: on default, react use state to record anything with state*/
  
  } 
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul className="ManageCoursePageheader">
            <li><Link to="/CurrentCoursesListPage">Edit Current Course</Link></li>
            <li><Link to="/AddNewCourse" onClick={() => createNewCourse(this.state.instructor_username).then((v) => this.setState({addNewCourseId: v}))}>Add New Course</Link></li>
            <li><Link to="/RemoveCourse">Remove a Course</Link></li>
          </ul>
          <div className="ManageCoursePagecontent">
            <Route path="/AddNewCourse" component={() => <AddNewCourse CourseId= {this.state.addNewCourseId}/>}/>
            <Route path="/CurrentCoursesListPage" component={() => <CurrentCoursesListPage/>} />
            <Route path="/RemoveCourse" component={() => <RemoveCourse/>}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
 
export default withAuthenticator(ManageCoursePage);