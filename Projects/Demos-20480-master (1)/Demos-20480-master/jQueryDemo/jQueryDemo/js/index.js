$(document).ready(function () {
	$("#toggleClassButton").click(function () {
		$(this).toggleClass("alerta");
	});

	$("#appendButton").click(function () {
		var posicao = $("#lista").children().length + 1;
		$("#lista").append("<li><button id='item'>Novo item " + posicao + "</button></li>");
	});

	// Remove um botão da lista quando clicamos nele
	$('ul').on('click', 'li', function () {
		$(this).remove();
	});

	$("#eachButton").click(function () {
		$("button").each(function() {
			if (this.style.color === "red") {
				this.style.color = "black";
			} else {
				this.style.color = "red";
			}
		});
	});
});