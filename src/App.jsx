import React, { useState } from "react";
import "./App.css";
import { getInitialData } from "./utils/index";
import Navbar from "./components/Navbar";
import NoteBody from "./components/NoteBody";
import Footer from "./components/Footer";

const App = () => {
	const [notes, setNotes] = useState(getInitialData());
	const [query, setQuery] = useState("");

	const onAddNoteHandler = ({ title, body }) => {
		setNotes((prevState) => {
			return [
				...prevState,
				{
					id: +new Date(),
					title,
					body,
					archived: false,
					createdAt: new Date().toISOString(),
				},
			];
		});
	};

	function onArchiveNoteHandler(id) {
		const archiveNote = notes.map((note) =>
			note.id === id ? { ...note, archived: !note.archived } : note
		);

		setNotes(archiveNote);
	}

	function onDeleteNoteHandler(id) {
		const filterNotes = notes.filter((note) => note.id !== id);
		setNotes(filterNotes);
	}

	function onSearchNoteHandler(event) {
		setQuery(event.target.value);
	}

	return (
		<div className="font-inter">
			<Navbar onSearchHandler={onSearchNoteHandler} query={query} />
			<NoteBody
				notes={notes}
				query={query}
				addNote={onAddNoteHandler}
				onDeleteNote={onDeleteNoteHandler}
				onArchiveNote={onArchiveNoteHandler}
			/>
			<Footer />
		</div>
	);
};

export default App;
