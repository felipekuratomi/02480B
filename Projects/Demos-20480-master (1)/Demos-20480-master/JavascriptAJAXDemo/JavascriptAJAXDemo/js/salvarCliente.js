(function () {
	var id = document.getElementById("id");
	var nome = document.getElementById("nome");
	var endereco = document.getElementById("endereco");

	var salvarClienteButton = document.getElementById("salvarCliente");
	salvarClienteButton.onclick = function() {
		var cliente = {
			Id: id.value,
			Nome: nome.value,
			Endereco: endereco.value
		};

		var url = "/api/Clientes";

		var request = new XMLHttpRequest();
		request.open("POST", url);
		request.setRequestHeader("Content-Type", "application/json");
		request.send(JSON.stringify(cliente));
	};
})();