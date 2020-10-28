import React, { Component } from "react";
import ReactModal from 'react-modal-resizable-draggable';

class Syllabus extends Component {

    constructor() {
        super();
        this.state = {
            text:"eqwqweq",
            changed_text:"",
            modalIsOpen:false
        };
        
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
        }
    
    closeModal() {
        this.setState({modalIsOpen: false});
        }


    render() {
        return (
            <div>
                <button className="Modal-open-button" onClick={this.openModal}> Edit Course Syllabus </button>
                <ReactModal onFocus={() => console.log("Modal is clicked")} className={"editing-course-syllabus-page"} onRequestClose={this.closeModal}  isOpen={this.state.modalIsOpen}>
                    <div>
                    <label>Edit Syllabus </label>
                    <input className="Syllabus-area" type="textarea" value={this.state.text} onChange={event => this.setState({text: event.target.value})}/>
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