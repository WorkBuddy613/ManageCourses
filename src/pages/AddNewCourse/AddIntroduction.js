/* eslint-disable no-lone-blocks */
import React, { Component } from "react";
import ReactModal from 'react-modal-resizable-draggable';
import './AddIntroduction.css';

class AddIntroduction extends Component {

    constructor() {
        super();

        this.state = {
            modalIsOpen: false,
            title: "",
            new_title: "",
            Subscription: false,
            image : "",
            new_image: "",
            Total_Enrollments : 0,
            Description: "",
            new_Description: "",
            tag_id:0,
            tag_name:"",
            Tags:[{id:0, name:""}]

        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.addTag = this.addTag.bind(this);
        this.addIntroduction = this.addIntroduction.bind(this);
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
    addIntroduction(){
        // eslint-disable-next-line no-lone-blocks
        {this.state.new_title ? this.setState({title: this.state.new_title}) : this.setState({new_title: ""})};
        {this.state.new_image ? this.setState({image: this.state.new_image}) : this.setState({new_title: ""})};
        {this.state.new_Description ? this.setState({Description: this.state.new_Description}) : this.setState({new_Description: ""})};
    
    }

    render() {
        return (
            <div className="Intro_Page">
                <button className="Modal-open-button" onClick={this.openModal}> Add Course Introduction </button>
                <ReactModal initHeight={500} onFocus={() => console.log("Modal is clicked")} className={"editing-course-intro-page"} onRequestClose={this.closeModal}  isOpen={this.state.modalIsOpen}>
                    <h3>Add Course Information</h3>
                    <div className="intro-form-group">
                    <div>    
                        <label>Edit Title:</label>
                        <input type="text" className="Edit_Title" value={this.state.new_title} onChange={e => this.setState({new_title: e.target.value})}/>
                    </div>
                    <div>
                        <label>Enter Image URL:</label>
                        <input type="text" className="Edit_image_url" value={this.state.new_image} onChange={e => this.setState({new_image: e.target.value})}/>
                    </div>
                    <div>
                        <label>Edit Description:</label>
                        <input type="textarea" className="Edit_Description" value={this.state.new_Description} onChange={e => this.setState({new_Description: e.target.value})}/>
                    </div>
                    <div><button  className="In-Modal-button" type="button" onClick={this.addIntroduction} > Add Introduction </button></div>
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