const array1 = [1, 2, 3, 4, 5];
const array2 = ["Apple", "Banana", "Mango"];
console.log(array1);
console.log(array2);


const array3 = new Array(1, 2, 3, 4, 5);
const array4 = new Array("Hello", "Hii", "how are you");
console.log(array3);
console.log(array4);


const fruits = ["apple", "mango", "banana"];
console.log(fruits[0])

fruits[0] = "Coconuts";
console.log(fruits);



// Methods of array
fruits.push("orange");
fruits.unshift("grape");
fruits.pop();
fruits.shift();
console.log(fruits);

const index = fruits.indexOf("Coconuts");
console.log(index);

console.log(fruits.length);



console.log("--------------------loop----------------");

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }


// for (const fruit of fruits) {
//     console.log(fruit);
// }

// for (const index in fruits) {
//     console.log(index);
//     console.log(fruits[index]);
// }


// let i = 0;
// while (i < fruits.length) {
//     console.log(fruits[i]);
//     i++;
// }


// let j = 0;
// do {
//     console.log(fruits[j]);
//     j++;
// } while (j < fruits.length);


fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});

