import React from "react";
import ProjectContainer from "../components/projects/projectsContainer";
import IssueContainer from "../components/issues/issueContainer";
import Header from "../components/header/header";
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
        <Header />
        <ProjectContainer
          selectProject={this.selectProject}
          selectedProject={this.state.project}
        />
        <IssueContainer project={this.state.project} />
      </>
    );
  }
}

export default Container;
