import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

/*
	Folds image on hover and shows content
*/

const Hoverfold = () => {
	const sliceStyle = {
		backgroundImage: "url(assets/projects/Namanagasycar.jpg)",
		backgroundRepeat: "no-repeat"
	};
	const backImageStyle = {
		backgroundImage: "url(assets/projects/Namanagasycar.jpg)",
		backgroundRepeat: "no-repeat"
	};

	return (
		<div className="hoverfold">
			<div className="hoverfold__back2 w-50" style={ backImageStyle }></div>
			<div className="hoverfold__back f-c-en-ce">
				<a className="hoverfold__link tr-200 white fs-250 mg-r-10" href="#0" title="Go to respository">
					<Icon icon={ ["fab", "github"] } />
				</a>
				<a className="hoverfold__link tr-200 white fs-250 mg-r-10" href="#0" title="View">
					<Icon icon={ ["fas", "link"] } />
				</a>
				<a className="hoverfold__link tr-200 white fs-250 mg-r-10" href="#0" title="Share link">
					<Icon icon={ ["fas", "share"] } />
				</a>
			</div>
			<div className="hoverfold__slice s1" style={ sliceStyle }>
				<div className="hoverfold__slice s2" style={ sliceStyle }>
					<div className="hoverfold__slice s3" style={ sliceStyle }>
						<div className="hoverfold__slice s4" style={ sliceStyle }>
							<div className="hoverfold__slice s5" style={ sliceStyle }>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hoverfold;
