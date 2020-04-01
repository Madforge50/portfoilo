import React from "react";
import Introduction from "../components/Me/Introduction";
import Resume from "../components/Me/Resume";
import "./me.css";

const Me = () => {
  return (
    <div className="me-container">
      <Introduction />
      <Resume />
    </div>
  );
};

export default Me;
