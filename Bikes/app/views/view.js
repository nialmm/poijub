function View() {
	this.render = function(bikeList) {
		let bikeContainer = document.getElementById("bikeContainer");
		bikeContainer.innerHTML = "";
		// Se crearán las cajas para cada perro
		for(let i = 0; i < bikeList.length; i++) {
			// Hay que crear la caja, el nombre, la imagen, la 
			// descripción, los tags y el botón
			let box1 = document.createElement("div");
			let name = document.createElement("h4");
			let img = document.createElement("img");
			let price = document.createElement("p");
			let tags = document.createElement("p");
			let button = document.createElement("button");
			// Agregar estilos y atributos
			name.innerHTML = bikeList[i].name;
			box1.className = "bikeBox well";
			img.src = bikeList[i].img;
			img.alt = bikeList[i].name;
			price.innerHTML = bikeList[i].price;
			// Se muestran los tags uno a uno 
			for(let j in bikeList[i].tags) {
				tags.innerHTML += "#" + bikeList[i].tags[j] + " ";
			}
			// Solo falta el evento del bottón
			button.className = "btn btn-danger";
			button.innerHTML = "Comprar";
			button.addEventListener("click", (function(e) {
				console.log("Has presionado la bici " + bikeList[i].name);
			}), bikeList[i]);
			// Se genera la caja del perro
			
			box1.appendChild(name);
			box1.appendChild(img);
			box1.appendChild(price);
			box1.appendChild(tags);
			box1.appendChild(button);
			// Ahora si se agrega el perro al documento			
			bikeContainer.appendChild(box1);

		}
	}
	
	this.init = function() {
		this.render(bikeController.getBikes());		
		// Agregar el evento al botón buscar
		document.getElementById("btnSearch").addEventListener("click", function(e) {
			let searchText = document.getElementById("txtSearch").value.split(" ");
			bikeController.searchBike(searchText);
		});
	}
}