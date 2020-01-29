import './Contact.css';
import React from 'react';

function Contact(props) {
    return (
        <div className="Contact">
            <img src={props.src} alt={props.userNumber} className="avatar" />
            <div>
                <h3 className="name">{props.name}</h3>
                <span className="status">

                    <p className={props.status} />{props.isOnline}

                </span>
            </div>
        </div>

    );
}

export default Contact;