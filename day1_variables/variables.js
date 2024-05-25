// variables var, let and const

// var



function example() {

    // works within the function
    var a = 5
    // let b = 555

    // without declaring a it will show not defined error
    console.log("hello" + a)
    // console.log("Let varialble " + b)
}


// globle declaration of var
var a = 50
a = 40
let b = 100
// b = 200

const c = 5
c = 4444


example()
console.log(a)
console.log(b)
console.log(c)

