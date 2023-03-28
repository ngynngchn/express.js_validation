import React from "react";

function Entry({ ...entry }) {
	return (
		<div className="Entry">
			<h4>Driver:{entry.name}</h4>
			<h4>Manufacturer:{entry.manufacturer}</h4>
			<h4>Chassis:{entry.chassis}</h4>
			<h4>Mileage:{entry.mileage}</h4>
			<h4>License Plate:{entry.license}</h4>
			<h4>Load Capacity:{entry.capacity}</h4>
			<h4>Color:{entry.color}</h4>
		</div>
	);
}

export default Entry;
