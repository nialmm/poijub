function DogView() {
	this.render = function(dogList) {
		// Contenedor General
		let dogsContainer = document.getElementById("dogsContainer");
		// Limpiar el contenedor
		dogsContainer.innerHTML = "";
		// Recorremos cada perro de la lista y lo agregamos 
		// al documento
		for(let i = 0; i < dogList.length; i++) {
			// Generar las etiquetas para cada elemento del perro
			let dogBox = document.createElement("div");
			let name = document.createElement("h3");
			let img = document.createElement("img");
			let description = document.createElement("p");
			let tags = document.createElement("p");
			let button = document.createElement("button");
			// Configurar los atributos según se necesite
			dogBox.className = "dogContainer alert alert-info";
			name.innerHTML = dogList[i].name;
			img.src = dogList[i].img;
			img.alt = dogList[i].name;
			description.innerHTML = dogList[i].description;
			// Los tags son una coleccion
			for(let j in dogList[i].tags) {
				tags.innerHTML += "#" + dogList[i].tags[j] + " ";
			}
			// Finalmente el botón
			button.innerHTML = "Adoptar";
			button.className = "btn btn-primary";
			button.addEventListener("click", (function(e) {
				dogController.adopt(dogList[i]);
			}), dogList[i]);
			// Agregar los elementos a la caja
			dogBox.appendChild(name);
			dogBox.appendChild(img);
			dogBox.appendChild(description);
			dogBox.appendChild(tags);
			dogBox.appendChild(button);
			// Finalmente agregar los elementos al documento
			dogsContainer.appendChild(dogBox);
		}
	}
	
	this.init = function() {
		// Agregamos la funcionalidad al botón buscar
		let btnSearch = document.getElementById("btnSearch");
		let txtSearch = document.getElementById("txtSearch");
		btnSearch.addEventListener("click", function(e) {
			dogController.search(txtSearch.value);
		});		
	}

	this.writeTags = function(tags) {
		let txtTags = document.getElementById("txtTags");
		txtTags.innerHTML = "";
		for(let i in tags) {
			txtTags.innerHTML += "#" + tags[i] + " ";	
		}
	}
}