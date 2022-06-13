import React from "react";

const Footer = () => {
	return (
		<div className="note-app__footer py-4 px-3 flex justify-center mx-auto  max-w-7xl">
			<h1 className="text-white text-center">
				Created by{" "}
				<a
					href="https://github.com/arisdanang"
					target="_blank"
					className="text-sky-500 hover:text-sky-600"
				>
					Aris Danang
				</a>{" "}
				made with ❤️
			</h1>
			;
		</div>
	);
};

export default Footer;
