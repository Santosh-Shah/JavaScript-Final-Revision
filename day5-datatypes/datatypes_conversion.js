// let score = "abc33";
// let score = null
// let score = true
// let score = false;
// console.log(score)
// console.log(typeof(score))


// let valueInNumber = Number(score)
// console.log(valueInNumber)
// console.log(typeof valueInNumber)

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0


// let isLoggedIn = 1
// let isLoggedIn = 0
// let isLoggedIn = ""
// let isLoggedIn = "Hariom"
// let boolenIsLoggedIn = Boolean(isLoggedIn)
// console.log(boolenIsLoggedIn)
// console.log(typeof boolenIsLoggedIn)

// 1 => true,     0 => falese
// " " => false,  "Hariom" => true


// let someNumber = 33
// let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber)




// Data type conversion confusion

// implicit conversion

// string to number
// let result = "5" + 10
// console.log(typeof result)
// console.log(result)

// number to string
// let result = "50" + "10"
// console.log(typeof result)
// console.log(result)

// let result = "15" - 2;
// console.log(typeof result)
// console.log(result)


// let result = 5 - true
// console.log(result)
// console.log(typeof result)


// Explicit conversion--------------------
// let str = "1256"
// let num = Number(str)
// console.log(typeof str)
// console.log(typeof num)


// let num = 4526
// console.log(typeof num);

// let str = String(num);
// console.log(typeof str);


// let bool = true;
// let str = String(bool);
// console.log(typeof bool)
// console.log(typeof str)

// let strBool = "true";
// let bool = Boolean(strBool);

// console.log(strBool == bool);
// console.log(strBool === bool);
// console.log(typeof strBool)
// console.log(typeof bool)


let strInt = "455";
let int = parseInt(strInt);
console.log(typeof int);

// let str = '123';
// let num = +str;
// console.log(num); // 123

let str = 'abc';
let num = parseInt(str);
console.log(num); // NaN



// let str = 'abc';
// let num = parseInt(str);
// if (!isNaN(num)) {
//   // Perform calculations
//   console.log('Valid number:', num);
// } else {
//   console.log('Invalid input:', str);
// }



// let strFloat = "452.63";
// let float = parseFloat(strFloat);
// console.log(float)
// console.log(typeof float)



// common confusion---------------
// let result = "5" + 20;
// console.log(result)

// falsy values
// let und = undefined
// let zero = 0
// if(!zero) {
//     console.log(`0 is falsy value`);
// }

// console.log(und);
// console.log('');
// console.log(null);
// console.log(undefined);
// console.log(NaN);
// console.log(false);
// console.log(true);


// // comparing differecnt types
// console.log(5 == "5");
// console.log(50 === "50");


// let str = '123';
// let num = +str;
// console.log(typeof num); // 123


