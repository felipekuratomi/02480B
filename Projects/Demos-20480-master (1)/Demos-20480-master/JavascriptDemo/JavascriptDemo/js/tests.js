/// <reference path="objects.js" />
/// <reference path="~/Scripts/qunit-1.14.0.js" />
/// <reference path="namespaces.js" />
/// <reference path="objects.js" />
/// <reference path="closure.js" />

"use strict";
module("Namespaces - ", {
	setup: function () {

	},
	teardown: function () {

	}
});
test("Acesso a namespaces 1", function () {
	var result = Namespace1.add(2, 2);
	equal(4, result);
});
test("Acesso a namespaces 2", function () {
	var result = Namespace2.multiply(2, 2);
	equal(4, result);
});
test("Acesso a namespaces 3", function () {
	var result = Namespace3.subtration(2, 2);
	equal(0, result);
});
module("Closures - ");
test("makeClosure", function () {
	var myFunc = Closures.makeClosure(); // myFunc agora é um closure
	var result = myFunc();
	equal(result, "Mozilla");
});
test("makeAddClosure", function () {
	var add2Plus2 = Closures.makeAddClosure(2, 2);
	var add4Plus4 = Closures.makeAddClosure(4, 4);

	equal(add2Plus2(), 4);
	equal(add4Plus4(), 8);
});
test("makeIncrementClosure", function () {
	var incrementByOne = Closures.makeIncrementClosure();

	equal(incrementByOne(), 1);
	equal(incrementByOne(), 2);
	equal(incrementByOne(), 3);
	equal(incrementByOne(), 4);

	// outra instância do closure, não tem relação com a instância anterior
	// então a variável 'number' volta ao seu valor original
	var incrementByOneAgain = Closures.makeIncrementClosure();
	equal(incrementByOneAgain(), 1);
	equal(incrementByOneAgain(), 2);
	equal(incrementByOneAgain(), 3);
	equal(incrementByOneAgain(), 4);
});

test("Encapsulamento", function() {
	var criarPessoa = function(nome, endereco) {
		// membros privados
		var _nome = nome;
		var _endereco = endereco;

		// membros publicos
		return {
			getNome: function() {
				return _nome;
			},
			getEndereco: function() {
				return _endereco;
			}
		};
	};

	var joaquim = criarPessoa("Joaquim", "Rua 1");

	equal(joaquim.getNome(), "Joaquim");
	equal(joaquim.getEndereco(), "Rua 1");
	equal(typeof joaquim._nome, 'undefined');
	equal(typeof joaquim._endereco, 'undefined');
	equal(typeof joaquim.nome, 'undefined');
	equal(typeof joaquim.endereco, 'undefined');
});
module("Objects - ");
test("Acessando objetos", function () {
	equal(Objects.stooge1["first-name"], "Jerome");
	equal(Objects.flight.departure.IATA, "SYD");

	var middle = Objects.stooge1["middle-name"] || "(none)";

	equal(middle, "(none)");
});
test("Object.create()", function () {
	var baseObject = {
		name: "Fulano"
	};

	// Object.create() é um recurso do ECMAScript 5, mas pode ser emulado
	// em versão anteriores da seguinte forma:
	if (typeof Object.create !== "function") {
		Object.create = function (o) {
			var f = function () { };
			f.prototype = o;
			return new f();
		};
	};

	var childObject = Object.create(baseObject);

	equal(baseObject.name, "Fulano");
	equal(childObject.name, "Fulano");

	baseObject.address = "Rua 1";

	// Como o 'childObject' foi criado com Object.create(baseObject)
	// ele herda a propriedade 'address' que foi adicionada
	// ao 'baseObject'
	equal(baseObject.address, "Rua 1");
	equal(childObject.address, "Rua 1");
});
test("uma maneira mais tradicional de mexer com prototypes", function () {
	function animal(foodType) {
		this.foodType = foodType;
	};

	var cat = new animal("Milk");
	var cow = new animal("Hay");

	equal(cat.foodType, "Milk");
	equal(cow.foodType, "Hay");

	// Function objects are linked to Function.prototype
	// (which is itself linked to Object.prototype )

	animal.prototype.class = "Mammal";

	equal(cat.class, "Mammal");
});
module("Reflection - ");
test("typeof", function () {
	equal(typeof Objects.flight.number, "number");
	equal(typeof Objects.flight.airline, "string");
	equal(typeof Objects.flight.arrival, "object");
	equal(typeof Objects.flight.manifest, "undefined");
	equal(typeof Objects.flight.toString, "function");
	equal(typeof Objects.flight.constructor, "function");
});
test("hasOwnProperty", function () {
	// hasOwnProperty verifica se o membro pertence diretamente ao
	// objeto e não ao prototype chain
	equal(Objects.flight.hasOwnProperty("number"), true);
	equal(Objects.flight.hasOwnProperty("constructor"), false);
});
module("Invocation - ");
test("Method invocation pattern", function () {

	// When a function is stored as a property of an object, we call it a method. When a
	// method is invoked, this is bound to that object. If an invocation expression con-
	// tains a refinement (that is, a . dot expression or [subscript] expression), it is
	// invoked as a method:

	var myObject = {
		value: 0,
		increment: function (inc) {
			this.value += typeof inc === "number" ? inc : 1;
		}
	};

	myObject.increment();
	equal(myObject.value, 1);

	myObject.increment(2);
	equal(myObject.value, 3);
});
test("Function invocation pattern", function () {

	// When a function is not the property of an object, then it is invoked as a function.
	// When a function is invoked with this pattern, this is bound to the global object.
	// This was a mistake in the design of the language. Had the language been designed
	// correctly, when the inner function is invoked, this would still be bound to the this
	// variable of the outer function. A consequence of this error is that a method cannot
	// employ an inner function to help it do its work because the inner function does not
	// share the method’s access to the object as its this is bound to the wrong value. For-
	// tunately, there is an easy workaround. If the method defines a variable and assigns it
	// the value of this , the inner function will have access to this through that variable. By
	// convention, the name of that variable is that

	var myObject = {
		value: 1,
	};

	// Augment myObject with a double method.
	myObject.double = function () {
		var that = this; // Workaround.
		var helper = function () {
			// 'this' aqui dentro não é o myObject, mas sim o Global Object,
			// pois helper não é um método do myObject, mas apenas uma função
			// this.value = this.value + this.value;
			that.value = that.value + that.value;
		};
		helper(); // Invoke helper as a function.
	};
	// Invoke double as a method.
	myObject.double();
	equal(myObject.value, 2);
});
test("Constructor invocation pattern", function () {
	// Create a constructor function called Quo.
	// It makes an object with a status property.
	var Quo = function (string) {
		this.status = string;
	};
	Quo.prototype.get_status = function () {
		return this.status;
	};


	// Make an instance of Quo.
	var myQuo = new Quo("confused");
	equal(myQuo.get_status(), "confused");
});
test("Apply invocation pattern", function () {

	var Quo = function (string) {
		this.status = string;
	};
	Quo.prototype.get_status = function () {
		return this.status;
	};

	//Pelo fato do JavaScript ser um linguagem funcional orietada a objetos, funções
	//podem ter métodos. O método 'apply' nos deixa construir um array de argumentos para
	//usar ao invocar uma função e também nos deixa escolher o valor do 'this'. O método
	//'apply' recebe dois parâmetros, o primeiro parâmetro é o valor que será atribuído ao
	// 'this' e o segundo é um array de parâmetros.

	var add = function(x, y) {
		return x + y;
	};

	//Criar um array de 2 números e adicioná-los
	var array = [3, 4];
	var sum = add.apply(null, array);
	equal(sum, 7);

	// Make an object with a status member.
	var statusObject = {
		status: 'A-OK'
	};

	// statusObject does not inherit from Quo.prototype,
	// but we can invoke the get_status method on
	// statusObject even though statusObject does not have
	// a get_status method.
	var status = Quo.prototype.get_status.apply(statusObject); // statusObject is 'this'
	equal(status, "A-OK");
});

test("Types", function () {
	var x;
	equal(typeof x, "undefined");

	x = 1;
	equal(typeof x, "number");

	x = "banana";
	equal(typeof (x), "string");

	x = new Date(2015, 1, 1);
	equal(typeof x, "object");
});
