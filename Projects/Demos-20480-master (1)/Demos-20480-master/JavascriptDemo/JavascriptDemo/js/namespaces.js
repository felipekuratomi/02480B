"use strict";

// várias maneiras diferentes de se declarar um namespace

(function (ns) {
	ns.add = function (x, y) {
		return x + y;
	};
})(window.Namespace1 = window.Namespace1 || {});


var Namespace2 = Namespace2 || {};
Namespace2.multiply = function (x, y) {
	return x * y;
};

var Namespace3 = Namespace3 || {};
(function(ns) {
	ns.subtration = function(x, y) {
		return x - y;
	};
})(Namespace3);