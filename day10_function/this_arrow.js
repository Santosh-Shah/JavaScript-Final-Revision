console.log(this);

// this in object methods
// let person = {
//     name: "Santosh",
//     greet: function() {
//         console.log("Hello, my name is: " + this.name);
//     }
// };

// person.greet();


// Arrow functions and this
let person = {
    name: 'John',
    greet: function() {
        setTimeout(() => {
            console.log('Hello, my name is ' + this.name);
        }, 1000);
    }
};
person.greet(); // Output: Hello, my name is John (after 1 second)

