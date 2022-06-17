import React from "react";
import "./App.css";
// import { getInitialData } from "./utils/index";
import { NoteProvider } from "./context/NoteContext";
import Navbar from "./components/Navbar";
import NoteBody from "./components/NoteBody";
import Footer from "./components/Footer";

const App = () => {
	return (
		<div className="font-inter">
			<NoteProvider>
				<Navbar />
				<NoteBody />
				<Footer />
			</NoteProvider>
		</div>
	);
};

export default App;
