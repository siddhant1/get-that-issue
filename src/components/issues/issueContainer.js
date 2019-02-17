import React from "react";
import getIssues from "../../utils/getIssues";
import isEqual from "lodash/isEqual";
import Issue from "./Issue";
import Spinner from "../reusable/Spinner/spinner";

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
    if (!isEqual(prevProps, this.props)) {
      this.setState(current => {
        return { ...current, loading: true };
      });
      let issues = await getIssues(this.props.project);

      this.setState(current => {
        return { ...current, loading: false, issues };
      });
    }
  }
  render() {
    return (
      <div>
        {this.state.loading ? (
          <Spinner />
        ) : this.state.issues.length === 0 ? (
          "No Good-First issues Found 😭"
        ) : (
          this.state.issues.map(issue => <Issue issue={issue} />)
        )}
      </div>
    );
  }
}

export default IssueContainer;
