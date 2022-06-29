import React from "react";
import NotesList from "./NotesList";

const NotesCategory = ({ notes, type }) => {
	const archiveNotes = notes.filter((note) => note.archived === true);
	const unarchiveNotes = notes.filter((note) => note.archived === false);
	// console.log(props);

	return (
		<>
			{type === "archive" ? (
				<h2 className="text-2xl my-4">Archive Notes</h2>
			) : (
				<h2 className="text-2xl my-4">Unarchive Notes</h2>
			)}
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{type === "archive" ? (
					<NotesList notes={archiveNotes} />
				) : (
					<NotesList notes={unarchiveNotes} />
				)}
			</div>
		</>
	);
};

export default NotesCategory;
