import projects from "../data/projects";
import search from "./search";

const getIssues = projectToSearch => {
  const [project] = projects.filter(
    project => project.search === projectToSearch
  );
  return search(project.q);
};

export default getIssues;
