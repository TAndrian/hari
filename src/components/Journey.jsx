import React from "react";
import { v4 as uuidv4 } from "uuid";
import JourneyItem from "./JourneyItem";

/*
	Journey timeline
*/

const journeyList = [
	{
		image: "/assets/journey/Lycée Andre Resampa Antsirabe.jpg",
		establishment: "Lycée André Resampa",
		location: "Antsirabe",
		about: "This is the most famous highschool in Antsirabe where almost all my family studied, I was obvious that I will pursue my studies there.",
		position: "Highschool",
		duration: "3 years",
		date: "2013 - 2014",
		description: "In my years in the highschool I already started programming. Once I graduated I knew I will study software engineering to follow this dream. I were not the most brilliant though, but I had one clear goal in my mind, becoming software developer.",
		icon: ["fas", "graduation-cap"],
		lottie: "/assets/journey/lottie0.jpg"
	},
	{
		image: "/assets/journey/Lycée Andre Resampa Antsirabe.jpg",
		establishment: "Lycée André Resampa",
		location: "Antsirabe",
		about: "This is the most famous highschool in Antsirabe where almost all my family studied, I was obvious that I will pursue my studies there.",
		position: "Highschool",
		duration: "3 years",
		date: "2013 - 2014",
		description: "In my years in the highschool I already started programming. Once I graduated I knew I will study software engineering to follow this dream. I were not the most brilliant though, but I had one clear goal in my mind, becoming software developer.",
		icon: ["fas", "graduation-cap"],
		lottie: "/assets/journey/lottie0.jpg"
	}
];

const mappedJourney = journeyList.map((journey, key) => (
	<JourneyItem
		start={ key === 0 }
		end={ key === journeyList.length - 1 }
		reversed={ key % 2 === 0 }
		journey={ journey } key={ uuidv4() }
	/>
));

const Journey = () => {
	return (
		<div className="f-c-st-st">
			{ mappedJourney }
		</div>
	);
};

export default Journey;
