// const names = ["Santosh", "Hariom", "Raju"];

// works same
const names = [
    "Santosh",
    "Hariom",
    "Raju"
];

// adding at specific index
names[1] = "Radhe Shyam";

console.log(names);
console.log("Accessing specific element: ", names[1]);
console.log("Checking is array or not: ", Array.isArray(names));



console.log("\n-------------Converting an array into string----------");
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(typeof fruits);
console.log("Convering array into string: ", fruits.toString(fruits));
console.log(typeof fruits.toString(fruits));


console.log("\n--------------Looping through an Arrays------------------");
const cars = ["Car1", "Car2", "Car3", "Car4", "Car5"];
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

console.log("we can also use for each loop");
cars.forEach(function(value) {
    console.log(value);
});

// Ading item to the end of the array
cars.push("Car6");
// or you can use this way as well
cars[cars.length] = "Cars7";  // Adds "Lemon" to the end of the array

console.log(cars);


// length of the array
console.log("Length of the array: ", cars.length);


console.log("\n----------------nested array and objects--------------------");
const myObj = {
    name: "Hariom Shah",
    age: 30,
    collegeName: [
        {name: "BPC College", address: ["Birgunj"]},
        {name: "Jyoti Paradise", address: ["Ganjbhawanipur"]},
        {name: "Lalitpur College", address: ["Jawalakhel"]}
    ]
};

for(let i in myObj.collegeName) {
    console.log(myObj.collegeName[i].name);
    for(let j in myObj.collegeName[i].address) {
        console.log(myObj.collegeName[i].address[j], "\n");
    }
}

