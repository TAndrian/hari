import React from "react";
import JourneyCard from "./JourneyCard";
import JourneyLine from "./JourneyLine";

/*
	A row in the journey
*/

const JourneyItem = ({
	start,
	end,
	reversed,
	journey,
	key
}) => {
	return (
		<section className={ `journey-item ${reversed ? "journey-item--reversed" : ""} f-r-st-ce` } key={ key }>
			<JourneyCard
				image={ journey.image }
				establishment={ journey.establishment }
				location={ journey.location }
				about={ journey.about }
				position={ journey.position }
				duration={ journey.duration }
				date={ journey.date }
			>
				{ journey.description }
			</JourneyCard>
			<JourneyLine start={ start } end={ end } icon={ journey.icon }/>
			<figure className="w-200px h-200px">
				<img className="w-100 h-100" src={ journey.lottie } alt="Lottie" />
			</figure>
		</section>
	);
};

export default JourneyItem;
