import React, {
	useState,
	useMemo,
	useContext,
	createContext
} from "react";

/*
	Menu hook and context
*/

// Setup context
const MenuContext = createContext({});

// Setup provider wrapper
const MenuProvider = ({ children }) => {
	const [opened, setOpened] = useState(false);
	const [links, setLinks] = useState([
		{ icon: ["fas", "pencil-alt"], content: "My journey", anchor: "#journey", title: "Read my story." },
		{ icon: ["fas", "wrench"], content: "Skills", anchor: "#skills", title: "How skilled I am ?" },
		{ icon: ["fas", "laptop"], content: "Projects", anchor: "#projects", title: "List of my projects." },
		{ icon: ["fas", "id-card"], content: "Pricing", anchor: "#pricing", title: "View my prices" },
		{ icon: ["fas", "envelope"], content: "Contacts", anchor: "#get-in-touch", title: "How to reach me." }
	]);

	// Toggles filter on of off
	const toggle = () => setOpened(prevState => !prevState);
	const close = () => setOpened(false);

	// Memoize values to prevent futile re-renders
	const memoizedValues = useMemo(() => ({
		opened, links, toggle, close
	}), [opened, links]);

	return (
		<MenuContext.Provider value={ memoizedValues }>
			{ children }
		</MenuContext.Provider>
	);
};

const useMenu = () => useContext(MenuContext);

export {
	useMenu,
	MenuProvider
};