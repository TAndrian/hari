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
		<div className="container">
			<ProjectEmpty />
			{/*<ProjectCard />*/}
		</div>
	);
};

export default ProjectList;
