(function () {
	// vamos supor que você recebeu esta lista de um servidor
	var clientes = [
		{
			nome: "Cliente 1",
			endereco: "Rua 1"
		},
		{
			nome: "Cliente 2",
			endereco: "Rua 2"
		},
		{
			nome: "Cliente 3",
			endereco: "Rua 3"
		},
		{
			nome: "Cliente 4",
			endereco: "Rua 4"
		}
	];

	// e agora você quer exibir esta lista na página

	var carregarButton = document.getElementById("carregarButton");
	var listaDeClientes = document.getElementById("listaDeClientes");

	carregarButton.onclick = function () {
		for (var i = 0; i < clientes.length; i++) {
			var item = clientes[i];
			var novoCliente = document.createElement("li");
			novoCliente.innerHTML = item.nome + " - " + item.endereco;
			listaDeClientes.appendChild(novoCliente);
		}
	};
})();