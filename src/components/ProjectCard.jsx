import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import ProjectImage from "./ProjectImage";
import ProjectTags from "./ProjectTags";

/*
	Displays project item info
*/

const tags = [
	{ name: "React", color: "#149299"},
	{ name: "NextJS", color: "black"},
	{ name: "Typescript", color: "#283eab"},
	{ name: "SASS", color: "#f33d5d"},
	{ name: "NodeJS", color: "gold"},
	{ name: "Express", color: "purple"},
	{ name: "MongoDB", color: "green"}
];

const ProjectCard = () => (
	<div className="project-card bg-white f-c-st-st tr-200">
		<ProjectImage content="2015" />
		<div className="body f-c-st-be n-s">
			<div>
				<h4 className="pd-10 fs-110">Namanagasycar</h4>
				<div className="separator bg-theme w-30 mg-l-10"></div>
				<p className="tx-j fs-90 pd-10">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam magna dui, blandit eget malesuada sit amet, dapibus bibendum.
				</p>
			</div>
			<ProjectTags list={ tags } />
		</div>
	</div>
);

export default ProjectCard;