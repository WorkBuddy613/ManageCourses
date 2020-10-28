import React, {useState} from "react";
import ReactModal from 'react-modal-resizable-draggable';
import {Link} from "react-router-dom";
import './LessonIterator.css';

export const LessonIterator = ({id, videoLink, title, text}) => {
    
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };
    
    return(
      <div>
        <div>
            <h3><Link onClick={openModal}>{title}</Link></h3>
        </div>
        <div>
        <ReactModal onFocus={() => console.log("Modal is clicked")} className={"adding-course-lesson-page"} onRequestClose={closeModal} isOpen={modalOpen}>
        <h2>{title}</h2>
        <div>
            <label>Video Link: </label>
            <a className="Lesson-list" href={videoLink}>{videoLink}</a>
        </div>
        <div>
            <label>Overview:</label>
            <p>{text}</p>
        </div>
        <div><button className="Modal-close-button" type="button" onClick={closeModal}>Close</button></div>
        </ReactModal > 
        </div>
      </div>
    )
  };