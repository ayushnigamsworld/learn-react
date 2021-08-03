import React from "react";
import RepoItem from "./RepoItem";
const Repos = (props) => {
  return props.repos.map((repo) => {
    return <RepoItem repo={repo} key={repo.id} />;
  });
};

export default Repos;
