import { useContext } from "react";
import { createContext, useState } from "react";
import { getInitialData } from "../utils";

const NoteContext = createContext();
export function UseNoteContext() {
	return useContext(NoteContext);
}

export function NoteProvider({ children }) {
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
		<NoteContext.Provider
			value={{
				notes,
				query,
				onAddNoteHandler,
				onArchiveNoteHandler,
				onDeleteNoteHandler,
				onSearchNoteHandler,
			}}
		>
			{children}
		</NoteContext.Provider>
	);
}
