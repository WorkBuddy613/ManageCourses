import React, { Component } from "react";
import ReactModal from 'react-modal-resizable-draggable';
import moment from "moment";
import { API, graphqlOperation } from 'aws-amplify';
import { createAnnouncement, updateAnnouncement} from '../../graphql/mutations';
import { listAnnouncements } from '../../graphql/queries';

async function createNewAnnoucement(announcement){
    console.log("in createNewLesson", announcement);
    const newAnnouncementDetails = { 
      content: announcement.content,
      courseID: announcement.courseID,
      publishTime: announcement.datetime
      //courseId, course, comments is now empty
    };
    console.log(newAnnouncementDetails);
    const newAnnouncement = await API.graphql(graphqlOperation(createAnnouncement, {input: newAnnouncementDetails}));  
    /*
    createLesson learning note:
    1. AppSync will generate created&updatedAt automatically here 
    2. graphqlOperation is a helper function. 
    Without it, it wil look more verbose like ⬇️: //But seems fine haha
    const newTodo = awiat API.graphql({ query: createTodo, variable: {input: todoDetails}})  
    */    
    console.log("new announcement created in database successfully", newAnnouncement);
}

async function listCurrentAnnouncements(){ 
    const allAnnouncements = await API.graphql(graphqlOperation(listAnnouncements));
    console.log("Fetch current lessons from database successfully", allAnnouncements);
    return allAnnouncements;
}

class AddAnnouncements extends Component {

  constructor() {
    super();
    this.state = {
        modalIsOpen: false,
        add: "",
        remove: 0,
        AnnouncementList:[{id:0}]
    };

    listCurrentAnnouncements().then((evt) => {
      evt.data.listAnnouncements.items.map((announcement, i) => {
          this.state.AnnouncementList.push({
            announcement_id: announcement.id, 
            announcement_description: announcement.content,
            announcement_courseId: announcement.courseID,
            announcement_datetime: announcement.publishTime
          });
      });
      this.setState({
          AnnouncementList: this.state.AnnouncementList
      })
   }); 

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.addAnnoucments =this.addAnnoucments.bind(this);
    
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }
  
  closeModal() {
    this.setState({modalIsOpen: false});
  }

  addAnnoucments() {
    var announcement = {
      content: this.state.add,
      courseID: this.props.NewCourseId_Announcements,
      datetime: moment().format("DD-MM-YYYY hh:mm:ss")
    }
    createNewAnnoucement(announcement);
    //var key = 1+ Math.floor(Math.random() * (100000-1));
    console.log("Announcement list 01", this.state.AnnouncementList);
    this.setState({AnnouncementList :this.state.AnnouncementList.concat({announcement_courseId: this.props.NewCourseId_Announcements, announcement_description:this.state.add, announcement_datetime: moment().format("DD-MM-YYYY hh:mm:ss")})});
    console.log("Announcement list", this.state.AnnouncementList)
    this.setState({add:""});
  }

  render() {
    return (
      <div className="Announcement_Page">
        <button className="Modal-open-button" onClick={this.openModal}> Add Annoucement </button>
        <ReactModal onFocus={() => console.log("Modal is clicked")} className={"editing-course-announcement-page"} onRequestClose={this.closeModal}  isOpen={this.state.modalIsOpen}>
                    <h3>Add Announcements</h3>
                    <div>
                    <input className="Annoucement-area" type="textarea" value={this.state.add} onChange={event =>this.setState({ add: event.target.value })}/>
                    <button className="In-Modal-button" type="button" onClick={this.addAnnoucments} disabled={!this.state.add}> Add </button>
                    </div>
                    <div><button className="Modal-close-button" onClick={this.closeModal}> Done </button></div>
        </ReactModal>
        <h2> Announcements </h2>
        {this.state.AnnouncementList.map((Announcement,i) => {return Announcement.announcement_courseId === this.props.NewCourseId_Announcements ? (<div><p>{Announcement.announcement_description}<div>{Announcement.announcement_datetime}</div></p></div>): ""})}
      </div>
    );
  }
}
 
export default AddAnnouncements;