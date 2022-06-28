import { useContext, useEffect } from "react";
import { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { apiRequest } from "../utils";

const NoteContext = createContext();
export function UseNoteContext() {
	return useContext(NoteContext);
}

export function NoteProvider({ children }) {
	// using fetch api
	// const API_URL = "http://localhost:8000/notes";
	const [notes, setNotes] = useLocalStorage("notes", []);
	const [fetchError, setFetchError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [query, setQuery] = useState("");

	// using fetch api
	/* useEffect(() => {
		const fetchItems = async () => {
			try {
				const response = await fetch(API_URL);
				if (!response.ok) {
					setIsLoading(true);
					setIsError(true);
					throw Error("tidak dapat menerima data yg diinginkan");
				}
				const listNote = await response.json();
				setNotes(listNote);
			} catch (err) {
				console.log(err.message);
				setIsError(true);
				setFetchError("failed to fetch data,please refresh the app");
			}
		};

		fetchItems();

		setIsLoading(false);
	}, []); */

	const onAddNoteHandler = async ({ title, body }) => {
		const newNote = {
			id: +new Date(),
			title,
			body,
			createdAt: new Date().toISOString(),
			archived: false,
		};

		setNotes((prevState) => {
			return [...prevState, newNote];
		});

		// const postOptions = {
		// 	method: "POST",
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 	},
		// 	body: JSON.stringify(newNote),
		// };

		// const result = await apiRequest(API_URL, postOptions);
		// console.log(result);
		// if (isError) setFetchError(result);
	};

	const onArchiveNoteHandler = async (id) => {
		const archiveNote = notes.map((note) =>
			note.id === id ? { ...note, archived: !note.archived } : note
		);

		setNotes(archiveNote);

		// const noteItem = archiveNote.filter((note) => note.id === id);

		// const updateOptions = {
		// 	method: "PATCH",
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 	},
		// 	body: JSON.stringify({ archived: noteItem[0].archived }),
		// };

		// const reqUrl = `${API_URL}/${id}`;
		// const result = await apiRequest(reqUrl, updateOptions);

		// if (isError) setFetchError(result);
	};

	function onDeleteNoteHandler(id) {
		const filterNotes = notes.filter((note) => note.id !== id);
		setNotes(filterNotes);

		// const deleteOptions = {
		// 	method: "DELETE",
		// };

		// const reqUrl = `${API_URL}/${id}`;
		// const result = apiRequest(reqUrl, deleteOptions);

		// if (isError) setFetchError(result);
	}

	function onSearchNoteHandler(event) {
		setQuery(event.target.value);
	}

	return (
		<NoteContext.Provider
			value={{
				notes,
				isLoading,
				isError,
				query,
				fetchError,
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
