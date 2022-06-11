import React from "react";
import Form from "./Form";
import NotesCategory from "./NotesCategory";

const NoteBody = ({ notes, query, addNote, onArchiveNote, onDeleteNote }) => {
	return (
		<div className="note-app__body text-white p-4 mx-auto my-4 max-w-5xl ">
			<Form addNote={addNote} />
			<NotesCategory
				notes={
					query
						? notes.filter((note) =>
								note.title.toLowerCase().includes(query.toLowerCase())
						  )
						: notes
				}
				onArchiveNote={onArchiveNote}
				onDeleteNote={onDeleteNote}
			/>
			<NotesCategory
				notes={
					query
						? notes.filter((note) =>
								note.title.toLowerCase().includes(query.toLowerCase())
						  )
						: notes
				}
				query={query}
				type="archive"
				onArchiveNote={onArchiveNote}
				onDeleteNote={onDeleteNote}
			/>
		</div>
	);
};

export default NoteBody;
