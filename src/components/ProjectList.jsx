import React, { Fragment } from "react";
import Section from "./Section";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";
import ProjectEmpty from "./ProjectEmpty";
// import { useProject } from "../hooks/useProject";

/*
	Displays list of projects
*/

const ProjectList = () => {
	return (
		<Fragment>
			{/*<ProjectEmpty />*/}
			<div className="project-list container">
				<div className="list w-100 pd-t-20 pd-b-20">
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
				</div>
			</div>
		</Fragment>
	);
};

export default ProjectList;
