
(function (ns) {
	"use strict";

	ns.makeClosure = function () {
		var name = "Mozilla";
		return function displayName() {
			return name;
		}
	};

	ns.makeAddClosure = function (x, y) {
		return function () {
			return x + y;
		};
	};


	// um closure que mantém uma referência para a variavel 'number'
	// e a incrementa cada vez que a função é chamada
	ns.makeIncrementClosure = function () {
		var number = 0;
		return function () {
			number++;
			return number;
		};
	};


	


})(window.Closures = window.Clojures || {});
