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
