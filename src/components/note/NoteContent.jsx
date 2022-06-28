import React from "react";
import { showFormattedDate } from "../../utils";

const NoteContent = ({ title, createdAt, body }) => {
	return (
		<div className="p-3 flex-1">
			<h1 className="font-bold text-lg overflow-hidden text-ellipsis whitespace-nowrap max-w-[16.375rem]">
				{title}
			</h1>
			<p className="text-xs text-slate-400 mb-2">
				{showFormattedDate(createdAt)}
			</p>
			<p className="text-sm min-h-[175px]">{body}</p>
		</div>
	);
};

export default NoteContent;
