import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  for (let project of projects) {
    console.log(project)
  }
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {
          projects.forEach((elem)=>{
            <ProjectItem key={elem.id} name={elem.name} about={elem.about} technologies={elem.technologies} />
          })
        }
      </div>
    </div>
  );
}

export default ProjectList;
