import React, { Component } from "react";
import ReactModal from 'react-modal-resizable-draggable';
import moment from "moment";
 
class Announcements extends Component {

  constructor() {
    super();
    this.state = {
        modalIsOpen:false,
        add: "",
        remove: 0,
        AnnouncementList:[{id:0},{id: Math.random + 21 ,text: "Lay on a flat bench, gripping dumbbells in each hand. Press the weights up above your chest, keeping them from touching, with your pinkies turned slightly inward. Maintain full body tension on the bench", datetime:"25-10-2020 08:55:03"},{id: Math.random + 422, text:"Lay on a flat bench, gripping dumbbells in each hand. Press the weights up above your chest, keeping them from touching, with your pinkies turned slightly inward. Maintain full body tension on the bench", datetime:"27-10-2020 08:55:03"}]
    };

    
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.addAnnoucments =this.addAnnoucments.bind(this);
    this.removeAnnoucments =this.removeAnnoucments.bind(this);
    
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

  removeAnnoucments() {
    const newAnnoucementList = this.state.AnnouncementList.filter(Announcement => Announcement.id !== this.state.remove);
    this.setState({AnnouncementList: newAnnoucementList});
    this.setState({remove: 0});
  }

  render() {
    return (
      <div className="Announcement_Page">
        <button className="Modal-open-button" onClick={this.openModal}> Add/Remove Announcement </button>
        <ReactModal initHeight={450} onFocus={() => console.log("Modal is clicked")} className={"editing-course-announcement-page"} onRequestClose={this.closeModal}  isOpen={this.state.modalIsOpen}>
                    <h3>Add/Remove Announcements</h3>
                    <div>
                    <label>Add Announcement:</label>
                    <input className="Annoucement-area" type="textarea" value={this.state.add} onChange={event =>this.setState({ add: event.target.value })}/>
                    <button className="In-Modal-button" type="button" onClick={this.addAnnoucments} disabled={!this.state.add}> Add </button>
                    </div>
                    <div>
                    <label> Remove Announcements: </label>
                    <select value={this.state.value} onChange={event =>this.setState({remove: event.target.value})}>
                    {this.state.AnnouncementList.map(Announcement => (<option key={Announcement.id} value={Announcement.id} >{Announcement.text}</option>))}
                    </select>
                    <button className="In-Modal-button" type="button" onClick={this.removeAnnoucments} disabled={!this.state.remove}> Remove </button>
                    </div>
                    <div><button className="Modal-close-button" onClick={this.closeModal}> Done </button></div>
                    
        </ReactModal>
        <h2> Announcements </h2>
    {this.state.AnnouncementList.map(Announcement => (<div key={Announcement.id}><p>{Announcement.text}<div>{Announcement.datetime}</div></p></div>))}
      </div>
    );
  }
}
 
export default Announcements;