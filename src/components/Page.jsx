import React from "react";

/*
	Page container
*/

const Page = ({ children }) => {
	return (
		<div className="page w-100 o-a">
			{ children }
		</div>
	);
};

export default Page;
