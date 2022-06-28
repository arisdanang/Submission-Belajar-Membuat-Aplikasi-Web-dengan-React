import { useEffect } from "react";
import { useState } from "react";

const useLocalStorage = (key, defaultValue = null) => {
	const [item, setItem] = useState(() => {
		try {
			const jsonItem = localStorage.getItem(key);
			if (jsonItem !== null) return JSON.parse(jsonItem);

			return defaultValue;
		} catch {
			return defaultValue;
		}
	});

	useEffect(() => {
		const rawValue = JSON.stringify(item);
		localStorage.setItem(key, rawValue);
	}, [key, item]);

	return [item, setItem];
};

export default useLocalStorage;
