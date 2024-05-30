// function greet() {
//     console.log("Hello");
// }

// greet();

// function expression: it means function assigning to variables
// let assignedVariable = function() {
//     console.log("Vedas College");
// }

// console.log(typeof assignedVariable);

// assignedVariable();



//Arraow Funtion(ES)
// let greet = () => {
//     console.log("Arrow function");
// }

// greet();



// Parameters and arguments 
// function greet(name) {
//     console.log(`College Name: ${name}`);
// }

// greet("Vedas College");




// Return statements
// function add(num1, num2) {
//     return num1 + num2;
// }

// let sum = add(54, 20);
// console.log(sum);

// function greet(name = "default name") {
//     console.log(`My name is: ${name}`);
// }

// greet("Santosh Shah");
// greet();



// function sum(...numbers) {
//     return numbers.reduce((total, value) => total + value, 0);
// }

// let result = sum(5, 3, 2, 5, 60);
// console.log(result);


console.log("\n-----------------Functions with objects--------------------");
// let person = {
//     name: "Rohit",
//     age: 25,
//     greet: function () {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// };

// person.greet();



// using this keyword
// let person = {
//     name: "Shyam",
//     age: 14, 
//     greet: function() {
//         console.log(`Hello, my name is ${this.name} and i am ${this.age} years old`);
//     }
// };

// person.greet();


// passing objects as arguments
// function printPersonInfo(person) {
//     console.log("Name: " + person.name);
//     console.log("age: " + person.age);
// };

// let john = {name: "Santosh Shah", age: 25};
// printPersonInfo(john);



// Returning objects from functions
// function createPerson(name, age) {
//     return {
//         name: name,
//         age: age
//     };

//     // or

//     // const info = {name: name, age: age};
//     // return info;
// }


// let person = createPerson("Santosh Yadav", 25);
// console.log(person);



// Objects Destructuring(ES)
let person = {
    name: "Harim Shah",
    age: 42
}

let {name, age} = person;
console.log(name);
console.log(age);
