import React from "react";
import "./about.css";
import PageTitle from "../PageTitle";

function About() {
    return (
        <div className="aboutWrapper uk-width-expand uk-margin-large-bottom">
            <div className="black-box"></div>
            <div className="gray-box"></div>
            <div className="white-box uk-flex uk-flex-center" uk-scrollspy="cls:uk-animation-slide-bottom; delay:300">
                <div className="about-box">
                    <PageTitle text="About" color="dark" />
                    <p className="aboutMeText uk-text-justify uk-padding">

                        I am a full stack web developer from Orange County, California with a 
                        Certificate of Completion from the University of California, Irvine's 
                        Full Stack Coding Bootcamp. My skills are in HTML, CSS, JavaScript, MySQL,
                        PostgreSQL, MongoDB, Express, Node.js, Passport.js, and React. During my 
                        time in the coding bootcamp, I have completed various projects that were 
                        meticulously overseen by senior developers and professional engineers. I 
                        am looking forward to a career in web development and am passionate about
                        the coding experience that I have gained. 
                    </p>
                    <br></br>
                    <p className="aboutMeText uk-text-justify uk-padding uk-padding-remove-top">
                        When I'm not coding, I spend a lot of time cycling, hiking, and playing 
                        video games. I love to socialize, but a lot of my time is spent working
                        on something new and being as productive as I can be.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;