import React from "react";
import SendMessage from "./SendMessage";
import Contacts from "./Contacts";
import Meet from "./Meet";

const GetInTouch = () => (
	<section id="get-in-touch" className="get-in-touch bg-white">
		<div className="container">
			<div className="list f-r-ce-ce w-100">
				<div className="box msg">
					<SendMessage />
				</div>
				<div className="box reach">
					<Contacts />
				</div>
				<div className="box meet">
					<Meet />
				</div>
			</div>
		</div>
	</section>
);

export default GetInTouch;
