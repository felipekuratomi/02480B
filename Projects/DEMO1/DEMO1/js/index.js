var Empregado = function (nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.falar = function () { //prototipo
        alert("Olá meu nome é" + this.nome);

    }
}

Empregado.prototype.andar = function (metros) {
    alert("Andei" + metros + "metros");


}





var joaquim = new Empregado("Joaquim", 25);

alert(joaquim.nome);

joaquim.falar();
joaquim.andar(38);

//function Empregado1(nome, idade) {
//    this.nome = nome;
//    this.idade = idade;
//}


