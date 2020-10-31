import React, { Component } from "react";
import ReactModal from 'react-modal-resizable-draggable';

class Syllabus extends Component {

    constructor() {
        super();
        this.state = {
            text:"eqwqweq",
            newText:"",
            modalIsOpen:false
        };
        
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.updateSyllabus = this.updateSyllabus.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }
    
    closeModal() {
        this.setState({modalIsOpen: false});
    }
    
    updateSyllabus(){
        this.setState({text: this.state.newText});
        this.setState({newText: ""});
    }


    render() {
        return (
            <div>
                <button className="Modal-open-button" onClick={this.openModal}> Edit Course Syllabus </button>
                <ReactModal onFocus={() => console.log("Modal is clicked")} className={"editing-course-syllabus-page"} onRequestClose={this.closeModal}  isOpen={this.state.modalIsOpen}>
                    <div>
                    <label>Edit Syllabus </label>
                    <input className="Syllabus-area" type="textarea" value={this.state.newText} onChange={event => this.setState({newText: event.target.value})}/>
                    <div><button className="In-Modal-button" onClick={this.updateSyllabus}>Update</button></div>
                    <div><button className="Modal-close-button" onClick={this.closeModal}> Cancel </button></div>
                    </div>
                </ReactModal>
                <div>
                    <h2>Syllabus</h2>
                    <div><p>{this.state.text}</p></div>
                </div>
            </div>
        );
    }
}

export default Syllabus