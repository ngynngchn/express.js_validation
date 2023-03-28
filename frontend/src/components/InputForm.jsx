import { useState } from "react";

function InputForm({ setEntries }) {
	const [name, setName] = useState();
	const [chassis, setChassis] = useState();
	const [mileage, setMileage] = useState();
	const [license, setLicense] = useState();
	const [color, setColor] = useState();
	const [capacity, setCapacity] = useState();
	const [manufacturer, setManufacturer] = useState();

	function handleClick(e) {
		e.preventDefault();
		const truck = {
			name,
			chassis,
			mileage,
			license,
			color,
			capacity,
			manufacturer,
		};

		fetch("http://localhost:9999/api/v1/lkw", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(truck),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setEntries(data);
			});
	}

	return (
		<div className="InputForm">
			<h2>Truck Form</h2>
			<form action="#">
				<input
					type="text"
					name="name"
					id="name"
					placeholder="Driver's name"
					onChange={(e) => {
						setName(e.target.value);
					}}
				/>
				<input
					type="text"
					name="manufacturer"
					id="manufacturer"
					placeholder="Manufacturer"
					onChange={(e) => {
						setManufacturer(e.target.value);
					}}
				/>
				<input
					type="number"
					name="chassis"
					id="chassis"
					placeholder="Chassis number"
					onChange={(e) => {
						setChassis(e.target.value);
					}}
				/>
				<input
					type="number"
					name="mileage"
					id="mileage"
					placeholder="Mileage"
					onChange={(e) => {
						setMileage(e.target.value);
					}}
				/>
				<input
					type="text"
					name="license-plate"
					id="license-plate"
					placeholder="License Plate"
					onChange={(e) => {
						setLicense(e.target.value);
					}}
				/>
				<input
					type="text"
					name="color"
					id="color"
					placeholder="Color"
					onChange={(e) => {
						setColor(e.target.value);
					}}
				/>
				<input
					type="text"
					name="load-capacity"
					id="load-capacity"
					placeholder="Load Capacity"
					onChange={(e) => {
						setCapacity(e.target.value);
					}}
				/>

				<button onClick={handleClick}>SEND</button>
			</form>
		</div>
	);
}

export default InputForm;
