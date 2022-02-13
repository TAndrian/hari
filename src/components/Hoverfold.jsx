import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

/*
	Folds image on hover and shows content
*/

const Hoverfold = () => (
	<div className="hoverfold">
		<div className="hoverfold__back f-c-en-ce">
			<a className="hoverfold__link tr-200 white fs-300 mg-r-10" href="#0" title="Voir le repository">
				<Icon icon={ ["fab", "github"] } />
			</a>
			<a className="hoverfold__link tr-200 white fs-300 mg-r-10" href="#0" title="Visiter">
				<Icon icon={ ["fas", "link"] } />
			</a>
		</div>
		<div className="hoverfold__slice s1" style={{backgroundImage: "url(assets/test.jpg)", backgroundRepeat: "no-repeat"}}>
			<div className="hoverfold__slice s2" style={{backgroundImage: "url(assets/test.jpg)", backgroundRepeat: "no-repeat"}}>
				<div className="hoverfold__slice s3" style={{backgroundImage: "url(assets/test.jpg)", backgroundRepeat: "no-repeat"}}>
					<div className="hoverfold__slice s4" style={{backgroundImage: "url(assets/test.jpg)", backgroundRepeat: "no-repeat"}}>
						<div className="hoverfold__slice s5" style={{backgroundImage: "url(assets/test.jpg)", backgroundRepeat: "no-repeat"}}>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default Hoverfold;
