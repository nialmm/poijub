function AdoptView() {
	this.init = function() {
		document.getElementById("btnAdopt").addEventListener("click", function(e) {
			adoptController.adopt();
		});
	}
	

	this.renderDog = function(dog) {
		// Generar las etiquetas para cada elemento del perro
		let dogBox = document.getElementById("dogContainer");
		let name = document.createElement("h3");
		let img = document.createElement("img");
		let description = document.createElement("p");
		let tags = document.createElement("p");
		let button = document.createElement("button");
		name.innerHTML = dog.name;
		img.src = dog.img;
		img.alt = dog.name;
		description.innerHTML = dog.description;
		// Los tags son una coleccion
		for(let j in dog.tags) {
			tags.innerHTML += "#" + dog.tags[j] + " ";
		}
		// Agregar los elementos a la caja
		dogBox.appendChild(name);
		dogBox.appendChild(img);
		dogBox.appendChild(description);
		dogBox.appendChild(tags);
	}


}