import React from "react";
import SendMessage from "./SendMessage";
import Contacts from "./Contacts";
import Games from "./Games";

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
					<Games />
				</div>
			</div>
		</div>
	</section>
);

export default GetInTouch;
