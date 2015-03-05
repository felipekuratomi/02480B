(function () {
	var listaDeClientes = document.getElementById("listaDeClientes");
	var adicionarCliente = function (cliente) {
		var novoItem = document.createElement("li");
		novoItem.innerHTML = cliente.Id + " - " + cliente.Nome + " - " + cliente.Endereco;
		listaDeClientes.appendChild(novoItem);
	}

	var processJson = function (data) {
		var clientes = JSON.parse(data);

		for (var i = 0; i < clientes.length; i++) {
			var cliente = clientes[i];
			adicionarCliente(cliente);
		}
	};

	var carregarClientesButton = document.getElementById("carregarClientes");
	carregarClientesButton.onclick = function () {
		listaDeClientes.innerHTML = "";
		var request = new XMLHttpRequest();
		request.accept = "application/json";
		request.onreadystatechange = function () {
			if (request.readyState === 4) {
				processJson(request.responseText);
			}
		}
		var url = "/api/Clientes";
		request.open("GET", url);
		request.send();
	};

})();