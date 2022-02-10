import React from "react";
import Navbar from "./Navbar";
import Page from "./Page";
import Cover from "./Cover";

/*
	Home page
*/

const Home = () => (
	<>
		<Navbar />
		<Page>
			<Cover />
			<h1>Hello from portfolio v3 !</h1>
		</Page>
	</>
);

export default Home;
