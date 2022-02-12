import React from "react";
import GetInTouchTitle from "./GetInTouchTitle";

const Games = () => {
	return (
		<div className="games f-c-st-st n-s">
			<GetInTouchTitle title="Other projects"/>
			<div
				className="display b-b br-5 o-h mg-t-20 mg-l-20 f-c-ce-ce"
				style={{
					background: "url(/assets/games.jpg) center center no-repeat",
					backgroundSize: "cover"
				}}
			>
				<p className="white mg-b-20 n-s p-n">I&apos;m also a game developer !</p>
				<a className="checkout theme br-5 pd-10 pd-l-20 pd-r-20 tr-200 p">
					Check out
				</a>
			</div>
		</div>
	);
};

export default Games;
