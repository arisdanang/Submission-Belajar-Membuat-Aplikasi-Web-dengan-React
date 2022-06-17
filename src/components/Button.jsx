import React from "react";
import { UseNoteContext } from "../context/NoteContext";

const Button = ({ type, id }) => {
	const { onArchiveNoteHandler, onDeleteNoteHandler } = UseNoteContext();

	return (
		<>
			{type === "delete" && (
				<button
					className="note-item__delete-button w-full py-2 border-r border-t text-red-500 font-bold hover:text-red-700"
					onClick={() => onDeleteNoteHandler(id)}
				>
					Delete
				</button>
			)}

			{type === "archive" && (
				<button
					className="note-item__archive-button w-full py-2  border-t text-yellow-300 font-bold hover:text-yellow-500"
					onClick={() => onArchiveNoteHandler(id)}
				>
					Archive
				</button>
			)}

			{type === "unarchive" && (
				<button
					className="note-item__delete-button w-full py-2  border-t text-yellow-300 font-bold hover:text-yellow-500"
					onClick={() => onArchiveNoteHandler(id)}
				>
					Unarchive
				</button>
			)}
		</>
	);
};

export default Button;
