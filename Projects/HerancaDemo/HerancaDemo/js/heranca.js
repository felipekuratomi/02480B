

function Animal(foodType) {
    this.foodType = foodType;


}

Animal.prototype.feed = function () {
    console.log("Fed the animal: " + this.foodType);

}

var animal = new Animal("None");
animal.feed();
var test = animal instanceof Animal;

function Cow(color) {
    this.color = color;
}

Cow.prototype = new Animal("Hay");
var c = new Cow("White");
c.feed();
var test = c instanceof Animal;
var test2 = c instanceof Cow;

