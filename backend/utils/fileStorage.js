import fs from "fs";

const DB_PATH = "./db.json";

export function save(item) {
	return new Promise((resolve, reject) => {
		// wir bekommen ein Promise zurück und rufen die Funktion load() auf

		load().then((data) => {
			// fügen das neue Element einem Array hinzu

			data.push(item);
			fs.writeFile(DB_PATH, JSON.stringify(data), (err) => {
				if (err) reject(err);
				else {
					resolve(data);
				}
			});
		});
	});
}

export function load() {
	// liest die Datei und gibt ein Promise zurück
	return new Promise((resolve, reject) => {
		fs.readFile(DB_PATH, (err, data) => {
			if (err) {
				console.error(err);
				reject(err);
			} else {
				resolve(JSON.parse(data));
			}
		});
	});
}
