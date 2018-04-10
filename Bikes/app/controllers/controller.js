function Controller() {
	this.getBikes = function() {
		return model.getBikes();
	}
	
	this.init = function() {
		view.init();
	}
	
	this.searchBike = function(keyWords) {
		let bikeList = model.getBikes();
		let filteredBikes =  bikeList.filter(function(bike) {
			for(let i in keyWords) {
				for(let j in bike.tags) {
					if(keyWords[i] == bike.tags[j]) {
						return bike;
					}
				}
			}
		});
		view.render(filteredBikes);
	}	
	
}