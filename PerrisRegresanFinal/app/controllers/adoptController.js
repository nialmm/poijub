function AdoptController($router, $dataManager) {
	this.init = function() {
		adoptView.init();
	}

	this.adopt = function() {
		$router.redirect("home")
		dogModel.adoptDog($dataManager.selectedDogId);
		alert("El perro ha sido adoptado satisfactoriamente");
	}
}