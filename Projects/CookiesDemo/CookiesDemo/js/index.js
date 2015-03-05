//Cookies
document.cookie = "username=Fulano;corPreferica=blue";

var valores = document.cookie.split(';'); //retorna um array de strings

var username = valores[0].split('=')[1];
var corPreferida = valores[1].split('=')[1];


//sessionStorage

sessionStorage["nome"] = "Fulano";

var nome = sessionStorage["nome"];

//localStorage
localStorage["nome"] = "Fulano";
var outroNome = localStorage["nome"];