import React from "react";
import { UseNoteContext } from "../../context/NoteContext";

const Button = ({ type, id }) => {
	const { onArchiveNoteHandler, onDeleteNoteHandler } = UseNoteContext();

	const confirmDelete = (id) => {
		const message = confirm("are you sure you want to delete?");

		if (message) {
			onDeleteNoteHandler(id);
		} else {
			return false;
		}
	};

	return (
		<>
			{type === "delete" && (
				<button
					className="w-full py-2 border-r border-t text-red-500 font-bold hover:text-red-700"
					onClick={() => confirmDelete(id)}
				>
					Delete
				</button>
			)}

			{type === "archive" && (
				<button
					className="w-full py-2  border-t text-yellow-300 font-bold hover:text-yellow-500"
					onClick={() => onArchiveNoteHandler(id)}
				>
					Archive
				</button>
			)}

			{type === "unarchive" && (
				<button
					className="w-full py-2  border-t text-yellow-300 font-bold hover:text-yellow-500"
					onClick={() => onArchiveNoteHandler(id)}
				>
					Unarchive
				</button>
			)}
		</>
	);
};

export default Button;
