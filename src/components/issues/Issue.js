import React from "react";
import "./issue.css";
const Issue = ({ issue }) => {
  return (
    <div>
      <a href={issue.url} target="blank" className="issue">
        {issue.title}
      </a>
    </div>
  );
};

export default Issue;
