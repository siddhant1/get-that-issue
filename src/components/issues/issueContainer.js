import React from "react";
import getIssues from "../../utils/getIssues";
import isEqual from "lodash/isEqual";
import Issue from "./Issue";
import Spinner from "../reusable/Spinner/spinner";

class IssueContainer extends React.Component {
  state = { issues: [], loading: false, showingIssues: [], offset: 0 };

  async componentDidMount() {
    this.fetchIssues();
  }
  async componentDidUpdate(prevProps) {
    if (!isEqual(prevProps, this.props)) {
      this.fetchIssues();
    }
  }
  fetchIssues=async ()=>{
    this.setState(current => {
      return { ...current, loading: true,offset: 0,showingIssues:[] };
    });
    let issues = await getIssues(this.props.project);
    let {offset,showingIssues}= this.state;
    while(offset<10 && offset<issues.length){
      showingIssues.push(issues[offset]);
      offset=offset+1;
    }
    this.setState(current => {
      return { ...current, loading: false, issues, showingIssues, offset };
    });
  }
  loadMoreIssues=()=>{
    let {offset,showingIssues,issues}= this.state;
    let limit=offset+10;
    while(offset<issues.length && offset<limit){
      showingIssues.push(issues[offset])
      offset=offset+1;
    }
    this.setState(current => {
      return { ...current, loading: false, issues, showingIssues, offset };
    });
  }
  render() {
    const {offset,issues} = this.state;
    return (
      <div>
        {this.state.loading ? (
          <Spinner />
        ) : this.state.issues.length === 0 ? (
          "No Good-First issues Found 😭"
        ) : 
          <>
          {this.state.showingIssues.map(issue => <Issue issue={issue} />)}
          {offset<issues.length && <button className="load-more-btn" onClick={this.loadMoreIssues}>More</button>}
          </>
        }
      </div>
    );
  }
}

export default IssueContainer;
