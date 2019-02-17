import React from "react";
import ProjectContainer from "../components/projects/projectsContainer";
import IssueContainer from '../components/issues/issueContainer'
class Container extends React.Component {
  state = { project: "node" };
  selectProject = project => {
    this.setState(current => {
      return {
        ...current,
        project
      };
    });
  };
  render() {
    return (
      <>
        <ProjectContainer selectProject={this.selectProject} />
        <IssueContainer project={this.state.project} />
      </>
    );
  }
}

export default Container;
