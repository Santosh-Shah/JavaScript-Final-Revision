// Immediately invoked function
// (function() {
//     console.log("Immediately Invoked Function Expression");
// })();



// IIFE with Parameters:
// (function(name) {
//     console.log("Hello!", name);
// })("Santosh Shah");


// Using IIFE for Module Pattern:
let moduleV = (function() {
    let privateVar = 'I am private';

    function privateMethod() {
        console.log(privateVar);
    }

    return {
        publicMethod: function() {
            privateMethod();
        }
    };
})();

// Output: I am private
moduleV.publicMethod();


// Arrow function
(() => {
    console.log("This is a arrow function IIFE");
})(); 