import React from "react";
import NoteButtons from "./NoteButtons";
import NoteContent from "./NoteContent";

const NoteItem = ({ id, title, createdAt, body, archived }) => {
	return (
		<div className="text-white border rounded-md mt-2 flex flex-col">
			<NoteContent title={title} createdAt={createdAt} body={body} />
			<NoteButtons archived={archived} id={id} />
		</div>
	);
};

export default NoteItem;
