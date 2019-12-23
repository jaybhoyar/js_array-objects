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

let penguins = [gunter, ramon, fred];

console.log(penguins[0]);

let secondPenguin = penguins[1];

len = penguins.length - 1;
console.log(penguins[len]);

penguins.push(myPenguin);

console.log(penguins.length);

penguins[0].canFly = true;

penguins[0].sayHello();

for (let i = 0; i <= penguins.length - 1; i++) {
	console.log(penguins[i].name);
	penguins[i].sayHello();
	penguins[i].numberOfFeet = 2;
	console.log(penguins[i].numberOfFeet);
}
for (let i = 0; i <= penguins.length - 1; i++) {
	if (penguins[i].canFly == true) console.log(`${penguins[i].name} can fly!`);
}
