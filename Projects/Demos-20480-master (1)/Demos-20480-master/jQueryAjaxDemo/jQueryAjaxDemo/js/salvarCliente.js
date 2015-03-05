(function () {
	$("#salvarCliente").click(function () {
		var cliente = {
			Id: $("#id").val(),
			Nome: $("#nome").val(),
			Endereco: $("#endereco").val()
		}

		$.ajax({
			contentType: "application/json",
			type: "POST",
			dataType: "json",
			url: "/api/Clientes",
			data: JSON.stringify(cliente)
		});
	});
})();