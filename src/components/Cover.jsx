import React from "react";
import CoverBottom from "./CoverBottom";

/*
	Home cover
*/

const Cover = () => (
	<div
		className="cover w-100 h-100 o-h"
		style={{
			background: "url(/backgrounds/0.jpg) center center no-repeat",
			backgroundSize: "cover"
		}}
	>
		<div className="container cover__container h-100">
			<div
				className="w-100 h-100 f-c-st-st"
				style={{
					background: "url(/cover/1.jpg) center center no-repeat",
					backgroundSize: "cover"
				}}
			>
				<div className="w-100 h-70 o-h">
				</div>
				<CoverBottom />
			</div>
		</div>
	</div>
);

export default Cover;
