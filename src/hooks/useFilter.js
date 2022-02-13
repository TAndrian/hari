import React, { useState, useEffect } from "react";

/*
	Hook for project filters
*/

const useFilter = (filters, technologies) => {
	const [filter, setFilter] = useState({});

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
		filters.forEach(f => {
			filterDefault[f.name] = false;
		});
		technologies.forEach(techno => {
			filterDefault[techno] = false;
		});
		setFilter(filterDefault);
	};

	// Init filters to false
	useEffect(() => reset(), []);

	let canReset = false;
	for(let key in filter) {
		if(filter[key]) {
			canReset = true;
			break;
		}
	}

	return {
		filter,
		toggle,
		canReset,
		reset,
	};
};

export default useFilter;