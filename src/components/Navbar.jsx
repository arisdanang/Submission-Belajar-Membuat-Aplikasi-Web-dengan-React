import React from "react";

const Navbar = ({ onSearchHandler, query }) => {
	return (
		<div className="note-app__header flex justify-between items-center px-3 py-3 max-w-7xl mx-auto border-b-2">
			<h1 className="text-2xl text-white font-bold mr-9">Notes</h1>
			<div className="note-search">
				<input
					type="text"
					placeholder="Search..."
					className="py-2 px-4 rounded-md bg-transparent border-dark-secondary border-2 text-white w-full"
					value={query}
					onChange={onSearchHandler}
				/>
			</div>
		</div>
	);
};

export default Navbar;
