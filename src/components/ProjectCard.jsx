import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import Hoverfold from "./Hoverfold";

/*
	Displays project item info
*/

const ProjectCard = () => (
	<div className="project-card w-320px h-420px mg-b-100 bg-white f-c-st-st tr-200">
		<div className="head w-100 f-r-ce-ce pd-t-10 pd-b-10">
			<Hoverfold />
			<p className="date pd-5 pd-l-10 pd-r-10 br-5 white"><Icon icon={ ["fas", "calendar-alt"] } /> 2016</p>
		</div>
		<div className="body f-c-st-be n-s">
			<div>
				<h4 className="pd-l-10 pd-r-10 pd-b-10 fs-110">Namanagasycar</h4>
				<div className="separator bg-theme w-30 mg-l-10"></div>
				<p className="tx-j fs-90 pd-10">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam magna dui, blandit eget malesuada sit amet, dapibus bibendum.
				</p>
			</div>
			<ul className="tag-list f-r-st-st pd-10 pd-t-0">
				<li className="tag-list__item bg-purple white br-5 fs-90 mg-r-5 mg-t-5">React</li>
				<li className="tag-list__item bg-lime white br-5 fs-90 mg-r-5 mg-t-5">NextJS</li>
				<li className="tag-list__item bg-black white br-5 fs-90 mg-r-5 mg-t-5">Typescript</li>
				<li className="tag-list__item bg-gold white br-5 fs-90 mg-r-5 mg-t-5">SASS</li>
				<li className="tag-list__item bg-green white br-5 fs-90 mg-r-5 mg-t-5">NodeJS/Express</li>
				<li className="tag-list__item bg-red white br-5 fs-90 mg-r-5 mg-t-5">MongoDB</li>
			</ul>
		</div>
	</div>
);

export default ProjectCard;