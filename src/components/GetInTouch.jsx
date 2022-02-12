import React from "react";
import SendMessage from "./SendMessage";
import Contacts from "./Contacts";
import Games from "./Games";

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
				<div className="box gaming">
					<Games />
				</div>
			</div>
		</div>
	</section>
);

export default GetInTouch;
