import React, { Component } from "react";

class Project extends Component {
  render() {
    const { project, selectProject } = this.props;
    return (
      <>
        <div className="button" onClick={() => selectProject(project.name)}>
          {project.name}
        </div>
      </>
    );
  }
}

export default Project;
