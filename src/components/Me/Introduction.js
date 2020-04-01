import React from "react";
import { AiTwotoneMail } from "react-icons/ai";
import photo from "../../images/victor_italia.JPG";
import "./introduction.css";

const Introduction = () => {
  return (
    <div className="intro-container">
      <div className="intro-content">
        <div className="greeting-sentence">
          <h2 className="greeting">Greetings!</h2>
          <h2 className="greeting">I'm Seungsu Kim.</h2>
          <h2 className="greeting">
            English education contents creator, lecturer.
          </h2>
          <h2 className="greeting">Currently living in Seoul, South Korea.</h2>
        </div>
        <img src={photo} alt="Seungsu Kim" />

        <div className="resume-box">
          <h2 className="title">Contact</h2>
          <div className="set">
            <p className="contact">
              <AiTwotoneMail />
              <span></span>
              madforge50@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
