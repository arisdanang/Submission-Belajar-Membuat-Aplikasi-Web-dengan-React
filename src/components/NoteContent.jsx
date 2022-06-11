import React from "react";
import { showFormattedDate } from "../utils";

const NoteContent = ({ title, createdAt, body }) => {
	return (
		<div className="note-item__content p-3">
			<h1 className="note-item__title font-bold text-lg overflow-hidden text-ellipsis whitespace-nowrap">
				{title}
			</h1>
			<p className="note-item__date text-xs text-slate-400 mb-2">
				{showFormattedDate(createdAt)}
			</p>
			<p className="note-item__body text-sm min-h-[175px]">{body}</p>
		</div>
	);
};

export default NoteContent;
