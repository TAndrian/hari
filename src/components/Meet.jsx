import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import GetInTouchTitle from "./GetInTouchTitle";
import MovingClouds from "./MovingClouds";

const Meet = () => {
	return (
		<div className="meet f-c-st-st n-s">
			<GetInTouchTitle title="Let's take a coffe" icon={ ["fas", "coffee"] }/>
			<div
				className="meet__box display b-b br-5 o-h mg-t-20 mg-l-20 f-c-ce-ce"
				style={{
					background: "url(/assets/backgrounds/meet.jpg) center center no-repeat",
					backgroundSize: "cover"
				}}
			>
				<MovingClouds />
				<div className="meet__content f-c-ce-ce w-100 h-100">
					<p className="text white mg-b-20 n-s p-n pd-10 pd-t-5 pd-b-5 br-5">
						Interested ? Let&apos;s meet or video call !<br />
						Check my resume bellow
					</p>
					<a
						className="checkout theme br-5 pd-10 pd-l-20 pd-r-20 tr-200 p"
						href="/Resume Harijaona Rajaonson.pdf"
						download="Resume Harijaona Rajaonson"
					>
						<Icon icon={ ["fas", "download"] }/> Download resume
					</a>
				</div>
			</div>
		</div>
	);
};

export default Meet;
