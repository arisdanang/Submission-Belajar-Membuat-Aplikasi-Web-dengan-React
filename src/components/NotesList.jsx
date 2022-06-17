import React from "react";
import NoteItem from "./NoteItem";

const NotesList = ({ notes }) => {
	const noteItem = notes.map((note) => {
		return (
			<NoteItem {...note} key={note.id} id={note.id} archived={note.archived} />
		);
	});

	return <>{notes.length !== 0 ? noteItem : <h1>No note</h1>}</>;
};

export default NotesList;
