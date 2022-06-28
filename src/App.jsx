import React from "react";
import "./styles/index.css";
// import { getInitialData } from "./utils/index";
import { NoteProvider } from "./context/NoteContext";
import Navbar from "./components/layout/Navbar";
import NoteBody from "./components/note/NoteBody";
import Footer from "./components/layout/Footer";

const App = () => {
	return (
		<>
			<NoteProvider>
				<Navbar />
				<NoteBody />
				<Footer />
			</NoteProvider>
		</>
	);
};

export default App;
