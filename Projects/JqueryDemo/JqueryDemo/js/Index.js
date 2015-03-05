$(document).ready(function () {
    //var meuDiv = document.getElementById("meuDiv");
    $("#meuDiv").css("background-color", "red");    //Fazer via CSS
    //$(".classe")
    //$("p span label")

    $("h2").each(function () {      //Fazer via CSS
        this.style.color = "red";
    });

    $("#toggleClassB").click(function () { //"#" para id
        $("#Button2").toggleClass("alerta");
        $("h2").toggleClass("alerta");
    });
});
