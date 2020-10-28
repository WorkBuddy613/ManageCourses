import React, { Component } from "react";
import ReactModal from 'react-modal-resizable-draggable';
import './AddIntroduction.css';

class AddIntroduction extends Component {

    constructor() {
        super();

        this.state = {
            modalIsOpen: false,
            title: "",
            Subscription: false,
            image : "",
            Total_Enrollments : 0,
            Description: "",
            tag_id:0,
            tag_name:"",
            Tags:[{id:0, name:""}]

        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.addTag = this.addTag.bind(this);
    }


    openModal() {
        this.setState({modalIsOpen: true});
    }
    closeModal() {
        this.setState({modalIsOpen: false});
    }
    addTag() {
        var key = 1+ Math.floor(Math.random() * (100000-1));
        this.setState({Tags :this.state.Tags.concat({id: Math.random + key, name: this.state.tag_name})});
        this.setState({tag_id:0});
        this.setState({tag_name:""});
      }

    render() {
        return (
            <div className="Intro_Page">
                <button className="Modal-open-button" onClick={this.openModal}> Add Course Introduction </button>
                <ReactModal initHeight={450} onFocus={() => console.log("Modal is clicked")} className={"editing-course-intro-page"} onRequestClose={this.closeModal}  isOpen={this.state.modalIsOpen}>
                    <h3>Add Course Information</h3>
                    <div className="intro-form-group">
                    <div>    
                    <label>Add/Edit Title:</label>
                    <input type="text" className="Edit_Title" value={this.state.title} onChange={e => this.setState({title: e.target.value})}/>
                    </div>
                    <div>
                    <label>Add/Edit Image URL:</label>
                    <input type="text" className="Edit_image_url" value={this.state.image} onChange={e => this.setState({image: e.target.value})}/>
                    </div>
                    <div>
                    <label>Add/Edit Description:</label>
                    <input type="textarea" className="Edit_Description" value={this.state.Description} onChange={e => this.setState({Description: e.target.value})}/>
                    </div>
                    <div>
                    <label>Add Tag:</label>
                    <input type="text" className="Tag" value={this.state.tag_name} onChange={e => this.setState({tag_name: e.target.value})}/>
                    <div><button  className="In-Modal-button" type="button" onClick={this.addTag} disabled={!this.state.tag_name}> Add </button></div>
                    </div>
                    </div>
                    <div><button className="In-Modal-button" onClick={this.closeModal}> Done </button></div>
                </ReactModal>
                <div className = "intro_view_page">
                    <h2>{this.state.title}</h2>
                    <img src = {this.state.image} alt = "IntroductionPageImage" />
                    <div>
                    <label> Tags: </label>
                    <ul className="Tags">
                        {this.state.Tags.map(Tag => <li key={Tag.id}><p>{Tag.name}</p></li>)}
                    </ul>
                    </div>
                    <h4 class="pos-left">Total Enrollments are {this.state.Total_Enrollments}</h4>
                    <h2>Overview</h2>
                    <p>{this.state.Description}</p>
                </div>
            </div>
        );
    }
}

export default AddIntroduction;