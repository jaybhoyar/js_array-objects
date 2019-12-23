var myPenguin = {
	name: "Whiteblack",
	origin: "Whiteblack the Penguin Sees the World",
	author: "H. A. Rey and Margret Rey"
};

myPenguin.favoriteFoods = ["squid", "fish", "krill"];

console.log(myPenguin.favoriteFoods[1]);

myPenguin.favoriteFoods.push("crustaceans");

let arrlength = myPenguin.favoriteFoods.length;

console.log(arrlength);

myPenguin.favoriteFoods[arrlength - 1] = "pineapples";

console.log(myPenguin.favoriteFoods[arrlength - 1]);
let lastFavFood = myPenguin.favoriteFoods[arrlength - 1];

for (var i = 0; i < arrlength; i++) {
	console.log(myPenguin.favoriteFoods[i]);
}
