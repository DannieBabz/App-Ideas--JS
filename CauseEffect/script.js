const persons = [
	{
		id: 1,
		name: "Leanne Graham",
		username: "Bret",
		email: "Sincere@april.biz",
		address: {
			street: "Kulas Light",
			suite: "Apt. 556",
			city: "Gwenborough",
			zipcode: "92998-3874",
			geo: {
				lat: "-37.3159",
				lng: "81.1496",
			},
		},
		phone: "1-770-736-8031 x56442",
		website: "hildegard.org",
		company: {
			name: "Romaguera-Crona",
			catchPhrase: "Multi-layered client-server neural-net",
			bs: "harness real-time e-markets",
		},
	},
	// {
	// 	id: 2,
	// 	name: "Ervin Howell",
	// 	username: "Antonette",
	// 	email: "Shanna@melissa.tv",
	// 	address: {
	// 		street: "Victor Plains",
	// 		suite: "Suite 879",
	// 		city: "Wisokyburgh",
	// 		zipcode: "90566-7771",
	// 		geo: {
	// 			lat: "-43.9509",
	// 			lng: "-34.4618",
	// 		},
	// 	},
	// 	phone: "010-692-6593 x09125",
	// 	website: "anastasia.net",
	// 	company: {
	// 		name: "Deckow-Crist",
	// 		catchPhrase: "Proactive didactic contingency",
	// 		bs: "synergize scalable supply-chains",
	// 	},
	// },
	// {
	// 	id: 3,
	// 	name: "Clementine Bauch",
	// 	username: "Samantha",
	// 	email: "Nathan@yesenia.net",
	// 	address: {
	// 		street: "Douglas Extension",
	// 		suite: "Suite 847",
	// 		city: "McKenziehaven",
	// 		zipcode: "59590-4157",
	// 		geo: {
	// 			lat: "-68.6102",
	// 			lng: "-47.0653",
	// 		},
	// 	},
	// 	phone: "1-463-123-4447",
	// 	website: "ramiro.info",
	// 	company: {
	// 		name: "Romaguera-Jacobson",
	// 		catchPhrase: "Face to face bifurcated interface",
	// 		bs: "e-enable strategic applications",
	// 	},
	// },
	// {
	// 	id: 4,
	// 	name: "Patricia Lebsack",
	// 	username: "Karianne",
	// 	email: "Julianne.OConner@kory.org",
	// 	address: {
	// 		street: "Hoeger Mall",
	// 		suite: "Apt. 692",
	// 		city: "South Elvis",
	// 		zipcode: "53919-4257",
	// 		geo: {
	// 			lat: "29.4572",
	// 			lng: "-164.2990",
	// 		},
	// 	},
	// 	phone: "493-170-9623 x156",
	// 	website: "kale.biz",
	// 	company: {
	// 		name: "Robel-Corkery",
	// 		catchPhrase: "Multi-tiered zero tolerance productivity",
	// 		bs: "transition cutting-edge web services",
	// 	},
	// },
	// {
	// 	id: 5,
	// 	name: "Chelsey Dietrich",
	// 	username: "Kamren",
	// 	email: "Lucio_Hettinger@annie.ca",
	// 	address: {
	// 		street: "Skiles Walks",
	// 		suite: "Suite 351",
	// 		city: "Roscoeview",
	// 		zipcode: "33263",
	// 		geo: {
	// 			lat: "-31.8129",
	// 			lng: "62.5342",
	// 		},
	// 	},
	// 	phone: "(254)954-1289",
	// 	website: "demarco.info",
	// 	company: {
	// 		name: "Keebler LLC",
	// 		catchPhrase: "User-centric fault-tolerant solution",
	// 		bs: "revolutionize end-to-end systems",
	// 	},
	// },
];

const listedItemsId = document.querySelectorAll(".list");
const listedItems = document.querySelector(".lists");

function insertId() {
	for (i = 0; i < persons.length; ) {
		listedItemsId.forEach((list) => {
			list.innerHTML = persons[i].id + " " + persons[i].name;
			i++;
		});
		listedItemsId.forEach((list) => {
			list.addEventListener("click", () => {
				for (var j = 1; j <= persons.length; j++) {
					let index = persons.find((person) => person.id == j);
					// console.log(Object.keys(index)[1]);
					let ul = document.createElement("ul");
					let li = document.createElement("li");

					li.appendChild(
						document.createTextNode((list.innerHTML += Object.keys(index)))
					);
					ul.appendChild(document.createTextNode(Object.values(index)));
					list.innerHTML += Object.values(index);
				}
			});
		});
	}
}
insertId();

// function showData2() {
// 	for (let key of persons) {
