import React from "react";
import "./pageTitle.css";

export default function PageTitle({ text, color }) {
    return (
        <h2 className={`uk-text-center ${color} ${(text === 'Portfolio' || text === 'Contact') && 'mobile-page-title' }`}>{text}</h2>
    )
}
