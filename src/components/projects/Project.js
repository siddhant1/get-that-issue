import React, { Component } from "react";
import classNames from 'classnames'
class Project extends Component {
  render() {
    const { project, selectProject, selectedProject } = this.props;
    let buttonClass = classNames({
      button: true,
      active: project.search === selectedProject
    });
    return (
      <>
        <div className={buttonClass} onClick={() => selectProject(project.search)}>
          {project.name}
        </div>
      </>
    );
  }
}

export default Project;
