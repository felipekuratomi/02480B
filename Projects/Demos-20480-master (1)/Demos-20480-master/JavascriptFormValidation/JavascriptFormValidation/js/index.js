(function () {
	var form = document.forms[0];
	var nome = document.getElementById("nome");
	var endereco = document.getElementById("endereco");

	function checkNome() {
		if (nome.value === "") {
			nome.setCustomValidity("O campo nome é obrigatório");
			nome.focus();
			return false;
		} else {
			nome.setCustomValidity("");
			return true;
		}
	};

	function checkEndereco() {
		if (endereco.value === "") {
			endereco.setCustomValidity("O campo endereço é obrigatório");
			endereco.focus();
			return false;
		} else {
			endereco.setCustomValidity("");
			return true;
		}
	};

	form.onsubmit = function () {
		return checkNome() && checkEndereco();
	};

	nome.addEventListener("input", checkNome, false);
	endereco.addEventListener("input", checkEndereco, false);
})();