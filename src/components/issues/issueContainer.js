import React from "react";
import getIssues from "../../utils/getIssues";

class IssueContainer extends React.Component {
  state = { issues: [], loading: false };

  async componentDidMount() {
    this.setState(current => {
      return { ...current, loading: true };
    });
    let issues = await getIssues(this.props.project);

    this.setState(current => {
      return { ...current, loading: false, issues };
    });
  }
  async componentDidUpdate(prevProps) {
    let issues = await getIssues(this.props.project);
    console.log(issues);
  }
  render() {
    return (
      <div>
        {this.state.loading ? "loading..." : JSON.stringify(this.state.issues)}
      </div>
    );
  }
}

export default IssueContainer;
