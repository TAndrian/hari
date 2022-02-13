import React from "react";
import { v4 as uuidv4 } from "uuid";

/*
	Technology tag list in project card
*/

const ProjectTags = ({ list }) => {
	const mappedTags = list.map(tag => (
		<li
			className="project-tags__item white br-5 fs-90 mg-r-5 mg-t-5 p"
			style={{
				background: tag.color
			}}
			key={ uuidv4() }
		>
			{ tag.name }
		</li>
	));

	return (
		<ul className="project-tags f-r-st-st pd-10 pd-t-0">
			{ mappedTags }
		</ul>
	);
};

export default ProjectTags;
