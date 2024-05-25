// list of datatypes
// Number: Represents numeric values (integers and floating-point).
// String: Represents textual data.
// Boolean: Represents true or false values.
// Undefined: Represents a variable that has been declared but not assigned a value.
// Null: Represents the absence of any object value.
// Object: Represents collections of data or more complex entities.
// Symbol: Represents a unique identifier.
// BigInt: Represents large integers.



// Number
let age = 25;                // integer
let price = 12.36;            // floating-point number
console.log("Integer number: " + age);
console.log("Floating number: " + price);


// String 
let greeting = "Hello, world";
let name = 'Santosh Shah'
let templateString = `Hello, ${greeting}!`;
let collegeName = "Vedas College"

console.log(greeting);
console.log(name);
console.log(templateString);
// console.log(`Santosh what is your college name, ${"Vedas College"}`)
console.log(`Santosh what is your college name, ${collegeName}`)



// Boolean-------------------
let isAvailable = true;
let hasFinished = false;

console.log(isAvailable);
console.log(hasFinished);


// undefined
let x;
console.log(x);


// null
let y = null;
console.log(y);


// objects
let person = {
    name: "Ravi",
    age: 42
};

console.log(person.name + "\n" + person.age)



// Symbol
let sym = Symbol("Description Hello");
console.log(sym)


// Bigint(ES11)
let bigNumber = BigInt(1234567890123456789012345678901234567890n);
let integerNum = 1234567890123456789012345678901234567890n;
console.log("Integer Number: " + integerNum)
console.log(bigNumber);



