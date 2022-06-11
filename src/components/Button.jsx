import React from "react";

const Button = ({ type, id, onArchiveNote, onDeleteNote }) => {
	return (
		<>
			{type === "delete" && (
				<button
					className="note-item__delete-button w-full py-2 border-r border-t text-red-500 font-bold"
					onClick={() => onDeleteNote(id)}
				>
					Delete
				</button>
			)}

			{type === "archive" && (
				<button
					className="note-item__archive-button w-full py-2 border-r border-t text-yellow-300 font-bold"
					onClick={() => onArchiveNote(id)}
				>
					Archive
				</button>
			)}

			{type === "unarchive" && (
				<button
					className="note-item__delete-button w-full py-2 border-r border-t text-yellow-300 font-bold"
					onClick={() => onArchiveNote(id)}
				>
					Unarchive
				</button>
			)}
		</>
	);
};

export default Button;
