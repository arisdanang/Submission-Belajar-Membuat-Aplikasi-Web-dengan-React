import React from "react";
import NoteButtons from "./NoteButtons";
import NoteContent from "./NoteContent";

const NoteItem = ({
	id,
	title,
	createdAt,
	body,
	archived,
	onArchiveNote,
	onDeleteNote,
}) => {
	return (
		<div className="note-item text-white border rounded-md mt-2 flex flex-col">
			<NoteContent title={title} createdAt={createdAt} body={body} />
			<NoteButtons
				archived={archived}
				id={id}
				onArchiveNote={onArchiveNote}
				onDeleteNote={onDeleteNote}
			/>
		</div>
	);
};

export default NoteItem;
