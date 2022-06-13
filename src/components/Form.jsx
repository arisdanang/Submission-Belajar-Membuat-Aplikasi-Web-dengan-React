import React, { useState } from "react";

const Form = ({ addNote }) => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [countChar, setCountChar] = useState(50);

	const onTitleChangeHandler = (event) => {
		setTitle(event.target.value.slice(0, 50));
		setCountChar(Math.max(0, 50 - event.target.value.length));
	};

	const onBodyChangeHandler = (event) => {
		setBody(event.target.value);
	};

	const onSubmitHandler = (event) => {
		event.preventDefault();

		const newNote = { title, body };
		addNote(newNote);
		setTitle("");
		setBody("");
	};

	return (
		<div className="max-w-lg mx-auto">
			<h1 className="text-white text-2xl">Add Note</h1>
			<p className="text-right text-slate-400">Sisa karakter: {countChar}</p>
			<form onSubmit={onSubmitHandler}>
				<input
					className="bg-transparent border border-slate-400 rounded-sm p-3 my-3 w-full"
					type="text"
					placeholder="fill the title..."
					value={title}
					onChange={onTitleChangeHandler}
					required
				/>
				<textarea
					className="bg-transparent border border-slate-400 rounded-sm p-3 my-3	w-full"
					name=""
					id=""
					cols="30"
					rows="10"
					placeholder="fill the note..."
					value={body}
					onChange={onBodyChangeHandler}
					required
				/>
				<button
					type="submit"
					className="bg-transparent border border-slate-400 rounded-sm w-full py-1"
				>
					Save
				</button>
			</form>
		</div>
	);
};

export default Form;
