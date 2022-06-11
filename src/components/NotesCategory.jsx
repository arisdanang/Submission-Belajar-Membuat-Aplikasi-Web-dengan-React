import React from "react";
import NotesList from "./NotesList";

const NotesCategory = ({ notes, type, onArchiveNote, onDeleteNote }) => {
	if (type === "archive") {
		const archiveNotes = Object.values(notes).filter(
			(note) => note.archived === true
		);
		return (
			<>
				<h2 className="text-2xl my-4">Archive Notes</h2>
				<div className="notes-list grid grid-cols-1fr sm:grid-cols-2fr md:grid-cols-3fr lg:grid-cols-4 gap-4">
					<NotesList
						notes={archiveNotes}
						onArchiveNote={onArchiveNote}
						onDeleteNote={onDeleteNote}
					/>
				</div>
			</>
		);
	} else {
		const unarchiveNotes = Object.values(notes).filter(
			(note) => note.archived === false
		);
		return (
			<>
				<h2 className="text-2xl my-4">Active Notes</h2>
				<div className="notes-list grid grid-cols-1fr sm:grid-cols-2fr md:grid-cols-3fr lg:grid-cols-4 gap-4">
					<NotesList
						notes={unarchiveNotes}
						onArchiveNote={onArchiveNote}
						onDeleteNote={onDeleteNote}
					/>
				</div>
			</>
		);
	}
};

export default NotesCategory;
