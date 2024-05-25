// ways to taking variables(var, let, const)-----------------------------------------

// var name = 'John';
// let age = 25;
// const isStudent = true;

// console.log(isStudent)


// basics operations-------------------------------------------------
let sum = 10 + 25
let product = 45 * 10
console.log("Sum: ", sum)
console.log("Produect: ", product)


//String concatenation-------------------------------------
let myCollegeName = "Vedas " + "College"
console.log(myCollegeName)


// control statements--------------------------------------
// if, else if, else

let score = 80
if (score >= 90) {
    console.log('A')
} else if (score >= 80) {
    console.log('B')
} else {
    console.log('C')
}



//Loops in js----------------------------
// for, while and do_while loop

// for loop
for (let i = 0; i < 5; i++) {
    console.log("For loop")
}

// while loop
let i = 0
while(i < 5) {
    console.log("While loop")
    i++
}

// do while loop
let j = 0
do {
    console.log("Do while loop")
    j++
} while (j < 5)



// function overview-----------------------------------------
output = printMyCollegeName("Vedas College")
console.log(output)


function printMyCollegeName(name) {
    return "My college Name: " + name + "!"
}

// function expression
const helloPrint = function(stringD) {
    return "Hi and " + stringD
}

console.log(helloPrint("Hello"))




// Objects in js----------------------------------
const person = {
    name: "Hariom Shah",
    age: "22",
    collegeName: "Thakur Ram Multiple Campus",
    hariomDetails: function() {
        return "My name is: " + this.name + " Age: " + this.age + " and i am studing in " + this.collegeName + " college"
    }
}

console.log(person.hariomDetails())



// Arrays in js
const numbers = [2, 4, 6, 3, 1]
console.log(numbers)
console.log(numbers[2])


// Connecting with html
alert("Hello, Santosh")


