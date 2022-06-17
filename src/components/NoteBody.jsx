import React from "react";
import Form from "./Form";
import NotesCategory from "./NotesCategory";
import { UseNoteContext } from "../context/NoteContext";

const NoteBody = () => {
	const { query, notes } = UseNoteContext();
	const filteredNote = query
		? notes.filter((note) =>
				note.title.toLowerCase().includes(query.toLowerCase())
		  )
		: notes;
	return (
		<div className="note-app__body text-white p-4 mx-auto my-4 max-w-5xl ">
			<Form />
			<NotesCategory notes={filteredNote} />
			<NotesCategory notes={filteredNote} type="archive" />
		</div>
	);
};

export default NoteBody;
