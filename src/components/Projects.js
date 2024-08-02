import React from "react";
import ProjectItem from "./ProjectItem";
import Vnav from "./Vnav";

const Projects = () => {
  return (
    <div>
      <Vnav></Vnav>
      <div className="col-md-8 text-center" style={{display:"inline-block", width:"72%"}}>
        <div className="row">
          <ProjectItem></ProjectItem>
          <ProjectItem></ProjectItem>
          <ProjectItem></ProjectItem>
          <ProjectItem></ProjectItem>
          <ProjectItem></ProjectItem>
          <ProjectItem></ProjectItem>
        </div>
      </div>
    </div>
  );
};

export default Projects;
