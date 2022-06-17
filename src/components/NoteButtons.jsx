import React from "react";
import Button from "./Button";

const NoteButtons = ({ archived, id }) => {
	return (
		<div className="note-item__action flex bg-transparent ">
			<Button type="delete" id={id} />
			{archived ? (
				<Button type="unarchive" id={id} />
			) : (
				<Button type="archive" id={id} />
			)}
		</div>
	);
};

export default NoteButtons;
