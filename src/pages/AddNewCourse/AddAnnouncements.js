import React, { Component } from "react";
import ReactModal from 'react-modal-resizable-draggable';
import moment from "moment";

class AddAnnouncements extends Component {

  constructor() {
    super();
    this.state = {
        modalIsOpen: false,
        add: "",
        remove: 0,
        AnnouncementList:[{id:0}]
    };

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
    var key = 1+ Math.floor(Math.random() * (100000-1));
    this.setState({AnnouncementList :this.state.AnnouncementList.concat({id: Math.random + key,text:this.state.add, datetime: moment().format("DD-MM-YYYY hh:mm:ss")})});
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
        {this.state.AnnouncementList.map(Announcement => (<div key={Announcement.id}><p>{Announcement.text}<div>{Announcement.datetime}</div></p></div>))}
      </div>
    );
  }
}
 
export default AddAnnouncements;