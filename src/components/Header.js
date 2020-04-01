import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = ({ currentLink, setCurrentLink }) => {
  return (
    <div className="header-container">
      <div className="header-left">
        <Link
          className="name"
          to="/portfolio"
          onClick={() => setCurrentLink("me")}
        >
          SEUNGSU KIM
        </Link>
        <p>making learning more fun and doable</p>
      </div>
      <div className="header-right">
        <span className="hide">
          <Link
            className={currentLink === "me" ? "link underLine" : "link"}
            to="/portfolio/me"
            onClick={() => setCurrentLink("me")}
          >
            Me
          </Link>
        </span>
        <span className="hide">
          <Link
            className={currentLink === "class" ? "link underLine" : "link"}
            to="/portfolio/class"
            onClick={() => setCurrentLink("class")}
          >
            Class
          </Link>
        </span>
        <span className="hide">
          <Link
            className={currentLink === "project" ? "link underLine" : "link"}
            to="/portfolio/project"
            onClick={() => setCurrentLink("project")}
          >
            Project
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Header;
