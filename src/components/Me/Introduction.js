import React from "react";
import { FaPaperclip, FaBlogger } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import photo from "../../images/victor_italia.JPG";
import "./me.css";

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
          <a
            className="resume-link"
            href="https://drive.google.com/file/d/19e4PKjY-jtd7Un-YcYSEWwsvYa27fGmy/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPaperclip size={18} />
            Resume
          </a>
          <a
            className="resume-link"
            href="https://madforge50.tistory.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBlogger size={20} />
            Blog
          </a>
        </div>

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
