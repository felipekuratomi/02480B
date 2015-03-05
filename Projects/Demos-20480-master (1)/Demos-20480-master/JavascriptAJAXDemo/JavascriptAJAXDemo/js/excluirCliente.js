(function () {
	var idTextbox = document.getElementById("idExcluir");
	var excluirClienteButton = document.getElementById("excluirCliente");

	excluirClienteButton.onclick = function () {
		var request = new XMLHttpRequest();
		var url = "/api/Clientes/";
		request.open("DELETE", url + idTextbox.value);
		request.send();
	};
})();