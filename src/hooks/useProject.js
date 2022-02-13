import React, {
	useState,
	useEffect,
	useMemo,
	useContext,
	createContext
} from "react";

/*
	Project list hook and context
*/

// Setup context
const ProjectContext = createContext({});

// Setup provider wrapper
const ProjectProvider = ({ children }) => {
	const [filter, setFilter] = useState({});
	const [filterList, setFilterList] = useState([
		{ name: "name", content: "Name" },
		{ name: "date", content: "Date" },
		{ name: "maximumTech", content: "Most technologies used" },
		{ name: "minimumTech", content: "Least technologies used" }
	]);
	const [technos, setTechnos] = useState([
		{ name: "React", color: "#149299"},
		{ name: "NextJS", color: "black"},
		{ name: "Typescript", color: "#283eab"},
		{ name: "SASS", color: "#f33d5d"},
		{ name: "NodeJS", color: "gold"},
		{ name: "Express", color: "purple"},
		{ name: "MongoDB", color: "green"}
	]);

	// Toggles filter on of off
	const toggle = (name) => {
		const newFilter = { ...filter };
		for(let key in newFilter) {
			if(key ===  name) {
				newFilter[key] = !newFilter[key];
				setFilter(newFilter);
				break;
			}
		}
	};

	// Reset all filters to off
	const reset = () => {
		let filterDefault = {};
		// Use static data now but will soon get data through API call here
		const technologies = technos.map(t => t.name);
		filterList.forEach(f => {
			filterDefault[f.name] = false;
		});
		technologies.forEach(techno => {
			filterDefault[techno] = false;
		});
		setFilter(filterDefault);
	};

	// Init filters to false
	useEffect(() => reset(), []);

	// Checks if at least one filter is active
	let filtersActive = false;
	for(let key in filter) {
		if(filter[key]) {
			filtersActive = true;
			break;
		}
	}

	// Memoize values to prevent futile re-renders
	const memoizedValues = useMemo(() => ({
		filter, filterList, technos, filtersActive, toggle, reset
	}), [filter, filterList, technos, filtersActive]);

	return (
		<ProjectContext.Provider value={ memoizedValues }>
			{ children }
		</ProjectContext.Provider>
	);
};

const useProject = () => useContext(ProjectContext);

export {
	useProject,
	ProjectProvider
};