const Router = function() {
  const get = function (url) {
      // Return a new promise.
      return new Promise(function(resolve, reject) {
        // Do the usual XHR stuff
        var req = new XMLHttpRequest();
        req.open('GET', url);
    
        req.onload = function() {
          // This is called even on 404 etc
          // so check the status
          if (req.status == 200) {
            // Resolve the promise with the response text
            resolve(req.response);
          }
          else {
            // Otherwise reject with the status text
            // which will hopefully be a meaningful error
            reject(Error(req.statusText));
          }
        };
    
        // Handle network errors
        req.onerror = function() {
          reject(Error("Network Error"));
        };
    
        // Make the request
        req.send();
      });
  }

  // Todos los elementos menus se convierten en redireccionadores hacia las páginas definidas en la 
  // configuración de la app
  this.init = function(pages) {
    let mainView = document.getElementsByTagName("main")[0];
    let menus = document.getElementsByTagName("a");
    for(let i in menus) {
      if(typeof menus[i] == "object") {
		let path = menus[i].getAttribute("sref");
		if(path) {
			menus[i].addEventListener("click", function(e) {
			  get(pages[path].template).then((result) => {
				mainView.innerHTML =  result;
				if(pages[path].controller) {
				  pages[path].controller.init();
				}
			  }).catch((error) => {
				mainView.innerHTML =  error;
			  });
			});
		}
      }
    }
  }

  // Configura la página de inicio
  this.defaultPage = function(page) {
    let mainView = document.getElementsByTagName("main")[0];
    get(page.template).then((result) => {
      mainView.innerHTML =  result;
      if(page.controller) {
        page.controller.init();
      }
    }).catch((error) => {
      mainView.innerHTML =  error;
    });
  }
}

  