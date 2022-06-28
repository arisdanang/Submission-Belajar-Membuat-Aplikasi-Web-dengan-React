import React from "react";
import Form from "../layout/Form";
import NotesCategory from "./NotesCategory";
import { UseNoteContext } from "../../context/NoteContext";

const NoteBody = () => {
	const { query, notes, isError, fetchError } = UseNoteContext();
	const filteredNote = query
		? notes.filter((note) =>
				note.title.toLowerCase().includes(query.toLowerCase())
		  )
		: notes;
	return (
		<main className="text-white p-4 mx-auto my-4 max-w-5xl ">
			<Form />
			<NotesCategory notes={filteredNote} />
			<NotesCategory notes={filteredNote} type="archive" />
		</main>
	);
};

export default NoteBody;
