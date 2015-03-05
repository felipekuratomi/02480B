(function () {
	var listaDeClientes = $("#listaDeClientes");
	
	$("#carregarClientes").click(function () {
		listaDeClientes.empty();
		$.getJSON("/api/Clientes", function (data) {
			$.each(data, function (key, cliente) {
				listaDeClientes.append("<li>" + cliente.Id +
					"-" + cliente.Nome + "-" +
					cliente.Endereco + "</li>");
			});
		});
	});
})();