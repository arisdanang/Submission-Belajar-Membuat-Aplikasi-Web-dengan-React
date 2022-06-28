import React from "react";
import Button from "../common/Button";

const NoteButtons = ({ archived, id }) => {
	return (
		<div className="flex bg-transparent ">
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
