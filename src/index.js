import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import Home from "./components/Home";

/*
	Main entry point
*/

ReactDOM.render(
	<React.StrictMode>
		<Home />
	</React.StrictMode>,
	document.getElementById("root")
);