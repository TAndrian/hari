import React from "react";
import { LazyLoadImage as Image } from "react-lazy-load-image-component";
import ProfileCard from "./ProfileCard";
import CoverBottom from "./CoverBottom";
import CoverQuote from "./CoverQuote";
import CoverRight from "./CoverRight";

/*
	Home cover
*/

const Cover = () => (
	<div className="cover w-100 o-h">
		<Image
			className="w-100 h-100"
			alt="Background"
			src="/assets/backgrounds/2.jpg"
		/>
		<div className="container cover__container h-100">
			<div
				className="w-100 h-100 f-c-st-st"
				style={{
					background: "url(/assets/cover/3.jpg) center center no-repeat",
					backgroundSize: "cover"
				}}
			>
				<div className="w-100 h-80 o-h f-r-be-ce">
					<ProfileCard />
					<CoverRight />
				</div>
				<CoverBottom />
			</div>
		</div>
	</div>
);

export default Cover;
