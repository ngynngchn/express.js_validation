import express from "express";
import cors from "cors";
import { body, validationResult } from "express-validator";
import { load, save } from "./utils/fileStorage.js";

const app = express();
const PORT = 9999;

app.use(cors({ origin: "http://localhost:5174" }));
app.use(express.json()); // befüllt den req.body wenn der content-type application/json ist

// unsere LKW Routen
// Konvention bei Nutzung einer API api zu beginn der Route mit der Version
app.get("/api/v1/lkw", (request, response) => {
	load()
		.then((data) => response.json(data))
		.catch((err) => {
			console.log(err);
			response.status(500).end();
		});
});
app.post("/api/v1/lkw", body("name").isString(), (request, response) => {
	// auf Validierungs Error prüfen
	const errors = validationResult(request);
	if (!errors.isEmpty()) {
		return response.status(400).json({ error: errors.array() });
	}
	// Wie weisen wir unserer Daten zu
	//1.-> Referenz
	const lkw = request.body;
	// 2. const lkw = {fahrgestellnummer: req.body.fahrgestellnummer} -> Kopie

	save(lkw)
		.then((data) => response.json(data))
		.catch((err) => {
			console.log(err);
			response.status(500).end();
		});
});

app.listen(PORT, () => console.log("I am listening to PORT", PORT));
