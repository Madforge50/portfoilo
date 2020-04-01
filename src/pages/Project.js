import React, { useEffect } from "react";
import ProjectList from "../components/Project/ProjectList";

const Project = ({ setCurrentLink }) => {
  useEffect(() => {
    setCurrentLink("project");
  });
  return <ProjectList />;
};

export default Project;
