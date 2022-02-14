import React, { useState, useEffect } from "react";
import { LazyLoadImage as Image } from "react-lazy-load-image-component";
import ProfileCard from "./ProfileCard";
import CoverBottom from "./CoverBottom";
import CoverQuote from "./CoverQuote";
import CoverRight from "./CoverRight";

/*
	Home cover
*/

const Cover = () => {
	const [bgCover, setBgCover] = useState(4);
	const [bg, setBg] = useState(3);

	// Gets current hour as integer
	const getCurrentHour = () => {
		const date = new Date().toLocaleString("fr-FR", { hour12: false });
		return parseInt(date.split(" ")[1].split(":")[0]);
	};

	useEffect(() => {
		// Changes cover background
		const changeBgCover = () => {
			const now = getCurrentHour();
			const timeLimits = [5, 8, 13, 16, 19];
			for (let i = 0, j = 0; i < timeLimits.length - 1; i++, j++) {
				if (now >= timeLimits[i] && now < timeLimits[i + 1]) {
					setBgCover(j);
					break;
				}
			}
		};
		// Changes background
		const changeBg = () => {
			const now = getCurrentHour();
			const timeLimits = [5, 8, 16, 19];
			for (let i = 0, j = 0; i < timeLimits.length - 1; i++, j++) {
				if (now >= timeLimits[i] && now < timeLimits[i + 1]) {
					setBg(j);
					break;
				}
			}
		};
		// Checks regularly as time passes
		const id = setInterval(() => {
			changeBgCover();
			changeBg();
		}, 5000);
		// Apply current default
		changeBgCover();
		changeBg();
		return () => clearInterval(id);
	}, []);

	return (
		<div className="cover w-100 o-h">
			<Image
				className="w-100 h-100"
				alt="Background"
				src={ `/assets/backgrounds/${bg}.jpg` }
			/>
			<div className="container cover__container h-100">
				<div className={ `cover__bg--${bgCover} w-100 h-100 f-c-st-st` }>
					<div className="w-100 h-80 o-h f-r-be-ce">
						<ProfileCard dark={ getCurrentHour() >= 19 } />
						<CoverRight />
					</div>
					<CoverBottom />
				</div>
			</div>
		</div>
	);
}

export default Cover;
