var router = new Router();
var model = new BikeModel();
var view = new View();
var bikeController = new Controller();

var pages = {
	"home": {
		template: "../app/templates/home.html",
		controller: bikeController
	},
	"aboutBikes": {
		template: "../app/templates/aboutBikes.html"
	},
	"contacto": {
		template: "../app/templates/contacto.html"
	}
	
}

router.init(pages);
router.defaultPage(page["home"]);