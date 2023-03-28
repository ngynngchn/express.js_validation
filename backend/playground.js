const person = {
	name: "christian",
	alter: 45,
};

const mensch = person;

console.log(mensch, person);

mensch.name = "Erwinia";
mensch.alter = 18;

console.log(mensch, person);

const lebewesen = {
	name: person.name,
	alter: person.alter,
};

// lebewesen.name = "Hildegard";

const leben = { ...person };

console.log(lebewesen == person);

const arr = ["apfel", "banane", "orange"];
const arrB = arr;

arrB.push("Sportwagen");
console.log(arr);
