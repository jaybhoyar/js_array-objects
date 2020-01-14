var gunter = {
	name: "Gunter",
	origin: "Adventure Time",
	canFly: false,
	sayHello: function() {
		console.log("QUACK!!!");
	}
};

var ramon = {
	name: "Ramón",
	origin: "Happy Feet",
	canFly: true,
	sayHello: function() {
		console.log("Estoy encantado de conocerle.");
	}
};

var fred = {
	name: "Fred",
	origin: "Sitting Ducks",
	canFly: false,
	sayHello: function() {
		console.log("Hi there!");
	}
};
var myPenguin = {
	name: "Whiteblack",
	origin: "Whiteblack the Penguin Sees the World",
	author: "H. A. Rey and Margret Rey",
	canFly: false,
	sayHello: function() {
		console.log("Hi there!");
	}
};

myPenguin.outfit = {
	hat: "baseball cap",
	shirt: "Hawaiian shirt",
	pants: "cargo shorts",
	shoes: "flip-flops"
};
let penguinHatType = myPenguin.outfit.hat;
console.log(penguinHatType);

myPenguin.outfit = {
	watch: "pocket watch"
};
myPenguin.outfit.hat = "top hat";

delete myPenguin.outfit.pants;

for (var key in myPenguin.outfit) {
	console.log(key, myPenguin.outfit[key]);
}
