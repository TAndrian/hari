import React from "react";

const GetInTouchTitle = ({ title }) => (
	<div className="get-in-touch-title n-s">
		<h2 className="theme pd-20">{ title || "Title" }</h2>
		<div className="separator mg-l-20"></div>
	</div>
);

export default GetInTouchTitle;
