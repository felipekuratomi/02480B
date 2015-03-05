(function () {
	$("#excluirCliente").click(function () {
		$.ajax({
			url: "/api/clientes/" + $("#idExcluir").val(),
			type: "DELETE",
			success: function(data, textStatus, jqXhr) {
				alert(jqXhr.status);
			},
			error:  function(jqXhr, textStatus, errorThrown ) {
				alert(jqXhr.status);
			}
		});
	});
})();