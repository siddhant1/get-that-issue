import React, { Component } from "react";
import projects from "../../data/projects";
import Project from "./Project";
import "./project.css";

class ProjectsContainer extends Component {
  render() {
    return (
      <>
        <div className="button-container">
          {projects &&
            projects.map(project => (
              <Project
                project={project}
                selectProject={this.props.selectProject}
              />
            ))}
        </div>
      </>
    );
  }
}

export default ProjectsContainer;
