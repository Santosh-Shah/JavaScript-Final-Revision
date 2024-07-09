// const add = function(a, b) {
//     return a + b;
// };

// // arrow function
// const addArrow = (a, b) => a + b;
// console.log(addArrow(2, 5));
// console.log(add(4, 8));


// Example 2: Arrow Function with No Parameters
// const greet = () => "Hello, World";
// console.log(greet());



// Example 3: Arrow Function with One Parameter
// const square = x => x * 2;
// console.log(square(5));



// Example 4: Arrow Function with Multiple Statements
const sumAndSquare = (a, b) => {
    const sum = a + b;
    return sum * sum;
}

console.log(sumAndSquare(4, 6));