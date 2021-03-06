import React from "react";
import "./contactInfo.css";

function ContactInfo() {
    return (
        <div className="contactInfo uk-flex uk-flex-column uk-margin-bottom">
            <span className="contactLabel uk-text-muted uk-form-label">Email</span>
            <span className="contactDesc uk-flex uk-flex-middle"><span className="contactIcon"
                uk-icon="icon: mail"></span>ydna317@gmail.com</span>
            <span className="contactLabel uk-text-muted uk-form-label">Phone</span>
            <span className="contactDesc uk-flex uk-flex-middle"><span className="contactIcon"
                uk-icon="icon: phone"></span>714.345.6075</span>
            <span className="contactLabel uk-text-muted uk-form-label">LinkedIn</span>
            <span className="contactDesc uk-flex uk-flex-middle"><span className="contactIcon"
                uk-icon="icon: linkedin"></span><a href="https://www.linkedin.com/in/andyphuocnguyen/"
                    target="_blank" rel="noopener noreferrer">linkedin.com/in/andyphuocnguyen</a></span>
            <span className="contactLabel uk-text-muted uk-form-label">GitHub</span>
            <span className="contactDesc uk-flex uk-flex-middle"><span className="contactIcon"
                uk-icon="icon: github"></span><a href="https://github.com/ydna317"
                    target="_blank" rel="noopener noreferrer">github.com/ydna317</a></span>
            <hr className="uk-divider-small" />
        </div>
    );
}

export default ContactInfo;