import React, { Fragment } from "react";
import Navbar from "./Navbar";
import Page from "./Page";
import Cover from "./Cover";
import Section from "./Section";
import Journey from "./Journey";
import Copyright from "./Copyright";

/*
	Home page
*/

const Home = () => (
	<>
		<Navbar />
		<Page>
			<Fragment>
				<Cover />
				<Section
					id="journey"
					title="A passionnate developer"
					subtitle="Let me tell a story"
				>
					<Fragment>
						I have some experience in the software engineering. Here let me tell you a tale, a of a passionate developer in the world of programmation. Everything I have done since then is to learn again and again, trying to build apps successfully by myself though tutorials. Yeah I&apos;m self taught, I didn&apos;t had the opportunity to finish my studies but I swear I&apos;m more than skilled to do the job ! Nowadays, a bunch of new technologies are released every year and programming languages evolve rapidly with new features. So, learning and mastering quickly new frameworks or libraries is a key for a successfull developer. These tools are meant to ease the development process, to build better apps with less code and more structurated patterns.
					</Fragment>
				</Section>
				<div className="container">
					<Journey />
				</div>
				<Copyright />
			</Fragment>
		</Page>
	</>
);

export default Home;
