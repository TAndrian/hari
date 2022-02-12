import React from "react";
import SendMessage from "./SendMessage";
import Contacts from "./Contacts";

const GetInTouch = () => (
	<section id="get-in-touch" className="get-in-touch bg-white">
		<div className="container">
			<div className="f-r-ce-ce w-100">
				<div className="box">
					<SendMessage />
				</div>
				<div className="box">
					<Contacts />
				</div>
				<div className="box">
					<h2 className="theme pd-20">External links</h2>
					<div className="separator mg-l-20"></div>
				</div>
			</div>
		</div>
	</section>
);

export default GetInTouch;
