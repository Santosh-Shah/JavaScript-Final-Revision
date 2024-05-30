// let globalVar = "I am global var";

// function greet() {

//     let localVar = "I am local var";
//     globalVar = "i am changed in funtion";
//     console.log(globalVar);
//     console.log(localVar);
// }

// greet();
// console.log(globalVar);
// // console.log(localVar);


// Block Scope

// let num = 5;
// if (num == 5) {
//     let blockVar = "I am five";
//     console.log(blockVar);
// }

// console.log(blockVar);





// Scope Chain
let globalVariable = 'I am a global variable';

function outerFunction() {
    let outerVariable = 'I am an outer variable';

    function innerFunction() {
        let innerVariable = 'I am an inner variable';
        console.log(globalVariable); // Accessible
        console.log(outerVariable); // Accessible
        console.log(innerVariable); // Accessible
    }

    innerFunction();
    // console.log(innerVariable); // ReferenceError: innerVariable is not defined
}

outerFunction();
// console.log(outerVariable); // ReferenceError: outerVariable is not defined





// Hoisting:
// Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during compilation.

console.log(x); // Output: undefined
var x = 5;

// Equivalent to:
x = 250;
console.log(x); // Output: undefined
x = 5;
