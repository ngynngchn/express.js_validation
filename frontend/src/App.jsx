import "./App.css";
import { useState, useEffect } from "react";
import InputForm from "./components/InputForm.jsx";
import Entry from "./components/Entry.jsx";

function App() {
	const [entries, setEntries] = useState([]);

	useEffect(() => {
		fetch("http://localhost:9999/api/v1/lkw")
			.then((response) => response.json())
			.then((data) => setEntries(data));
	}, []);

	console.log(entries);

	return (
		<div className="App">
			<h1>Welcome to our Trucks!</h1>
			<InputForm setEntries={setEntries} />
			<div className="truck-list">
				{entries?.map((entry) => (
					<Entry {...entry} />
				))}
			</div>
		</div>
	);
}

export default App;
