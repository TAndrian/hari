import React from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import CoverQuote from "./CoverQuote";

/*
	Bottom part of home cover
*/

const socialList = [
	{
		icon: ["fab", "github"],
		link: "#0",
		title: "Visit my github profile !"
	},
	{
		icon: ["fab", "linkedin"],
		link: "#0",
		title: "Add me on LinkedIn !"
	},
	{
		icon: ["fab", "skype"],
		link: "#0",
		title: "Join me on Skype !"
	},
	{
		icon: ["fas", "envelope"],
		link: "#contacts",
		title: "Send me a message !"
	}
];

const mappedSocial = socialList.map(({ link, title, icon}) => (
	<li className="mg-l-10 mg-r-10" key={ uuidv4() }>
		<a
			className="link white fs-300 tr-200"
			href={ link }
			title={ title }
		>
			<Icon icon={ icon } />
		</a>
	</li>
));

const CoverBottom = () => (
	<div className="cover-bottom w-100 h-30 f-c-ce-st o-h">
		<CoverQuote />
		<div className="cover-bottom__separator w-60 bg-white"></div>
		<ul className="cover-bottom__social w-100 f-r-ce-ce">
			{ mappedSocial }
		</ul>
	</div>
);

export default CoverBottom;
