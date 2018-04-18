function DogModel() {
	let dogList = [
		{
			id: 0,
			name: "Andrés",
			img: "img/dog1.jpg",
			description: "Un perrito muy inteligente, hasta programa",
			tags: ["desagradable", "enojon", "programadot", "negro"],
			adopted: 0
		},
		{
			id: 1,
			name: "Jean Paul",
			img: "img/dog2.jpg",
			description: "Un perrito muy inteligente, hasta programa",
			tags: ["programador", "cafe"],
			adopted: 0
		},
		{
			id: 2,
			name: "Camila",
			img: "img/dog3.jpg",
			description: "Una perrita muy tierna",
			tags: ["tierna", "perra", "perrita", "blanca"],
			adopted: 0
		},
		{
			id: 3,
			name: "Jorge",
			img: "img/dog4.jpg",
			description: "Un ser divino",
			tags: ["divino", "rubio", "perro", "perrito"],
			adopted: 0
		},
		{
			id: 4,
			name: "Andrés",
			img: "img/dog5.jpg",
			description: "Un perrito muy inteligente, hasta programa",
			tags: ["desagradable", "enojo", "programado", "negro"],
			adopted: 0
		},
		{
			id: 5,
			name: "Andrés",
			img: "img/dog6.jpg",
			description: "Un perrito muy inteligente, hasta programa",
			tags: ["desagradable", "enojo", "programado", "negro"],
			adopted: 0
		},
		{
			id: 6,
			name: "Andrés",
			img: "img/dog7.jpg",
			description: "Un perrito muy inteligente, hasta programa",
			tags: ["desagradable", "enojo", "programado", "negro"],
			adopted: 0
		},
		{
			id: 7,
			name: "Andrés",
			img: "img/dog8.jpg",
			description: "Un perrito muy inteligente, hasta programa",
			tags: ["desagradable", "enojo", "programado", "negro"],
			adopted: 0
		}
	];
	
	this.getDogs = function() {
		return dogList.filter((dog) => {
			if(dog.adopted === 0) {
				return dog;
			}
		});
	}

	this.adoptDog = function(id) {
		dogList[id].adopted = 1;
	}
	
}