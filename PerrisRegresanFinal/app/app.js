// Servicios
const router = new Router();
const dataManager = new DataManager();
// Modelo
const dogModel = new DogModel();
// Controladores
const dogController = new DogController(router, dataManager);
const adoptController = new AdoptController(router, dataManager);
// Vistas
const dogView = new DogView();
const adoptView = new AdoptView();



const pages = {
	"home": {
		template: "../app/templates/home.html",
		controller: dogController
	},
	"aboutUs": {
		template: "../app/templates/aboutUs.html"
	},
	"adoption": {
		template: "../app/templates/adoptionForm.html",
		controller: adoptController
	}
}

router.init(pages);
router.defaultPage(pages["home"]);