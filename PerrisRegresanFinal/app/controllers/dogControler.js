function DogController($router, $dataManager) {
	this.init = function() {
		dogView.render(dogModel.getDogs());
		dogView.init();
	}
	
	this.search = function(searchingText) {
		searchingText = searchingText.toLowerCase();
		// Tratar el codigo de búsqueda
		let searchingTags = searchingText.split(" ");
		let dogList = dogModel.getDogs();
		let tags = [];
		// Si el usuario no escribe nada, entonces muestra todo
		if(searchingText == "") {
			dogView.render(dogModel.getDogs());
			return;
		}
		// Filtrar los perros por los parámetros de búsqueda
		let filteredDogs = dogList.filter(function(dog) {
			for(let j in searchingTags) {
				// Buscar por nombre
				if(searchingTags[j] == dog.name.toLowerCase()) {
					return dog;
				}
				// Buscar por tags
				for(let i in dog.tags) {				
					if(dog.tags[i] == searchingTags[j]) {
						// Si el tags no está, se agrega a la lista
						if(tags.indexOf(dog.tags[i]) == -1) {
							tags.push(dog.tags[i]);
						}
						return dog;
					}
				}
			}
		});
		// Mostrar los perros filtrados en el sitio
		dogView.render(filteredDogs);
		dogView.writeTags(tags);
	}

	// Se presiona el botón adoptar perro
	this.adopt = function(dog) {
		$router.redirect("adoption").then((result) => {
			$dataManager.selectedDogId = dog.id;
			adoptView.renderDog(dog);
		});
	}
}