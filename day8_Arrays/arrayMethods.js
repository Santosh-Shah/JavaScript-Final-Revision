// finding the length of array
const fruits = ["Banana", "Orange", "Apple"];
console.log("length: ", fruits.length);

// convert array to string
console.log("Converting array to string: ", fruits.toString())


// at() methods return the specified index
console.log(fruits[0]);
console.log(fruits[-1]);

// join() methods joins all elements with seperator
console.log(fruits.join(","));

console.log("\n---------The pop() method removes the last element from an array and returns that element.----------");
console.log(fruits.pop());
console.log(fruits);

console.log("\n---------The push() method adds new elements to the end of an array and returns the new length of the array.--------");
console.log(fruits.push("Couliflower"));
console.log(fruits);


console.log("\n----------The shift() method removes the first element from an array and returns that element.-----------");
console.log(fruits.shift());
console.log(fruits);

console.log("\n-----------The unshift() method adds new elements to the beginning of an array and returns the new length of the array------------------");
console.log(fruits.unshift("Brilangle"));
console.log(fruits);

console.log("\n------The unshift() method adds new elements to the beginning of an array and returns the new length of the array.-----");
delete fruits[1];
console.log(fruits);
console.log(fruits.length);

console.log("\n-------The concat() method merges two or more arrays.--------");
const moreFruits = ["Apple", "Mango"];
console.log(fruits.concat(moreFruits));

console.log("\n---------The copyWithin() method copies array elements to another position in the array.-----------");
console.log(fruits);
console.log(fruits.copyWithin(2, 0));


console.log("\n------The splice() method adds/removes items to/from an array and returns the removed items.-------");
const newFruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(newFruits);
const removed = newFruits.splice(2, 1, "Lemon", "Kiwi");
console.log(newFruits); // Outputs: ["Banana", "Orange", "Lemon", "Kiwi", "Mango"]
console.log(removed); // Outputs: ["Apple"]



console.log("\n--------The slice() method returns a new array containing a portion of the original array.--------");
const oldFruits = ["Banana", "Orange", "Apple", "Mango"];
const citrus = oldFruits.slice(1, 3);
console.log(citrus); // Outputs: ["Orange", "Apple"]





console.log("\n---------------Searching Methods--------------")
const array1 = ["Apple", "Banana", "Orange", "Apple"];
console.log(array1.indexOf("Apple"));

console.log(array1.lastIndexOf("Apple"));
console.log(array1.includes("Applee"));
// console.log(array1.sort());
console.log(array1.reverse());
array1.forEach(num => console.log(num));

const numb = [34, 67, 1, 10, 20, 11, 10];
const found = numb.find(elem => elem == 1);
console.log(found);

console.log(numb.findIndex(elem => elem == 10));







console.log("\n------------------JavaScript Sorting Arrays-----------------------");
const cars = ["Car1", "Car4", "Car0", "Car3", "Car2"];
// console.log(cars.sort());

const numbers = [0, 45, 20, 11, 23];
// console.log(numbers.sort());

// console.log(cars.reverse());
console.log(cars);

const carss = [
    { make: "Volvo", year: 2016 },
    { make: "BMW", year: 2019 },
    { make: "Saab", year: 2008 }
  ];

console.log(carss);
console.log(carss.sort((a, b) => a.year - b.year));





console.log("\n-------------------Arrays Iteration Methods-----------------------");
const veg = ["veg1", "veg2", "veg3", "veg4", "veg5"];
veg.forEach((value, index) => {console.log(index, value)});


const orgArray = [4, 6, 3, 4];
const doubledArray = orgArray.map(num => num * 2);
console.log(doubledArray);

console.log(orgArray.filter(num => num % 2 == 0));
console.log(orgArray.reduce((acc, value) => acc + value, 0));
console.log(orgArray.reduceRight((acc, value) => acc - value, 0));

