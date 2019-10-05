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
                key={project.name}
                project={project}
                selectProject={this.props.selectProject}
                selectedProject={this.props.selectedProject}
              />
            ))}
        </div>
      </>
    );
  }
}

export default ProjectsContainer;
