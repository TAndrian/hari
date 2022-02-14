import React from "react";
import Navbar from "./Navbar";
import Menu from "./Menu";
import { MenuProvider } from "../hooks/useMenu";

/*
	Wrap menu an navbar inside context
*/

const NavigationWrapper = () => (
	<MenuProvider>
		<Navbar />
		<Menu />
	</MenuProvider>
);

export default NavigationWrapper;