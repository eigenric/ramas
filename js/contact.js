var receive_data = function() {

	var textarea = document.getElementById("opinion");
	var opinion = textarea.value;
	textarea.value = '';

	return opinion;

};


var show_info = function(message) {

	var info = document.getElementById('info');
	info.innerHTML = "<p>" + message + "</p>";
	info.style.display = "block";

}

document.addEventListener("load", function(event) { 

	document.getElementById("enviar").onclick = function() {

		var opinion = receive_data();		
		if (opinion == '') {
			show_info("No has escrito nada");
		} else {
			show_info("Mensaje enviado");
		}
	}
});
