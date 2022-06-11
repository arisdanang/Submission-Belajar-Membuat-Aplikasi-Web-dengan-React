import React from "react";
import Button from "./Button";

const NoteButtons = ({ archived, id, onArchiveNote, onDeleteNote }) => {
	return (
		<div className="note-item__action flex bg-transparent ">
			<Button text="Delete" type="delete" id={id} onDeleteNote={onDeleteNote} />
			{archived ? (
				<Button type="unarchive" id={id} onArchiveNote={onArchiveNote} />
			) : (
				<Button type="archive" id={id} onArchiveNote={onArchiveNote} />
			)}
		</div>
	);
};

export default NoteButtons;
