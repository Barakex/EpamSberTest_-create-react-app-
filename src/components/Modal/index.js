import React from 'react';

function Modal (props) {
    return (
        <div className="modal">
            <div className="modal-content">
                <h1>Modal window</h1>
                <span>{props.text}</span>
                <div onClick={() => props.hendleClick()} className="circleClose">Close</div>
            </div>
        </div>
    );
}

export default Modal;