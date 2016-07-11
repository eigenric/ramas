var randInt = function(num) {

	return Math.round(Math.random()*num)

}

var juego = function() {

	var first = randInt(10);
	var second = randInt(10);

	if (first == second) {

		console.log(first + " es igual que " + second);
		console.log("Asombrosa coincidencia");

	} else if (first < second) {
	
		console.log(first + " es menor que " + second);
		console.log("Normal...");

	} else {


		console.log(first + " es mayor que " + second);
		console.log("Asquerosamente increible, no crees?");
	}

}



window.onload = function() {

	document.getElementById("juego").onclick = function {

		juego();

	}

}
