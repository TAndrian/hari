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
				<div className="list pd-b-20 f-r-be-st tx-l">
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
