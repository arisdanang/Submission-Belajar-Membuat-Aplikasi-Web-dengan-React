import React from "react";
import { UseNoteContext } from "../../context/NoteContext";

const Navbar = () => {
	const { query, onSearchNoteHandler } = UseNoteContext();
	return (
		<header className="flex justify-between items-center px-3 py-3 max-w-7xl mx-auto border-b-2">
			<h1 className="text-2xl text-white font-bold mr-12">Notes</h1>
			<input
				type="text"
				placeholder="Search..."
				className="max-w-xs py-2 px-4 rounded-md bg-transparent border-dark-secondary border-2 text-white w-full"
				value={query}
				onChange={onSearchNoteHandler}
			/>
		</header>
	);
};

export default Navbar;
