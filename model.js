function BikeModel(){
	let bikeList = [
		{
			name: "Trek Stache 7",
			img: "img/b1.jpg",
			price: "$999.999",
			tags: ["Bike","Trek", "2018"]						
		},
		{
			name: "Cannondale Jekyll 2",
			img: "img/b2.jpg",
			price: "$999.999",
			tags: ["Bike","Cannondale", "2018"]
			
		},
		{
			name: "Cannondale Scalpel-SI Race",
			img: "img/b3.jpg",
			price: "$999.999",
			tags: ["Bike","Cannondale", "2018"]
			
		},
		{
			name: "Giant Trance 3",
			img: "img/b4.jpg",
			price: "$999.999",
			tags: ["Bike","Giant", "2018"]
			
		},
		{
			name: "Giant Trance X",
			img: "img/b1.jpg",
			price: "$999.999",
			tags: ["Bike","Giant", "2018"]
			
		},
		{
			name: "Trek Fuel EX 8",
			img: "img/b6.jpg",
			price: "$999.999",
			tags: ["Bike","Trek", "2018"]
			
		}
	];
	this.getBikes = function(){
		return bikeList;
	}
}

