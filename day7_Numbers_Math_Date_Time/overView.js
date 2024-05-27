let integerNumber = 42;
let floatingPointNumber = 3.25;

console.log(integerNumber, "\n", floatingPointNumber);


let result = 10 + 5;   // Addition
let difference = 10 - 5; // Subtraction
let product = 10 * 5;  // Multiplication
let quotient = 10 / 5;  // Division
let remainder = 10 % 3; // Modulus

console.log(result, "\n", difference, "\n", product, "\n", quotient, "\n", remainder);


// Math objects
console.log("Maths Objects------------------------");
let absoluteValue = Math.abs(-50);    // it return only posiive numbers
let roundedNumber = Math.round(3.3);   // it return the nearest numbers
let squareRoot = Math.sqrt(49);        // it returns square root number
console.log(absoluteValue);
console.log(roundedNumber);
console.log(squareRoot);

console.log(10 / 'abc'); // NaN
console.log(1 / 0);       // Infinity


console.log(typeof parseInt("52"));









console.log("Date and Time in JavaScript----------------------");

// Current date
let currentDate = new Date();
console.log(currentDate);

// customization of date
let specificDate = new Date(2023, 4, 27, 10, 30, 0);
console.log(specificDate);

let timestampDate = new Date(1622519730000); // Date from a specific timestamp
console.log(timestampDate);

let stringDate = new Date('2023-05-27T10:30:00');
console.log(stringDate);

// Getting Date and Time Components
let latestDate = new Date();
console.log(latestDate.getFullYear());
console.log(latestDate.getMonth());
console.log(latestDate.getDate());
console.log(latestDate.getHours());
console.log(latestDate.getMinutes());
console.log(latestDate.getSeconds());
console.log(latestDate.getDay());

latestDate.setFullYear(2025);
latestDate.setMonth(11); // December
latestDate.setDate(25);  // 25th
console.log(latestDate); // December 25, 2025


console.log(latestDate.toDateString());  // Example: "Sat Dec 25 2025"
console.log(latestDate.toTimeString());  // Example: "00:00:00 GMT+0000 (Coordinated Universal Time)"
console.log(latestDate.toISOString());   // Example: "2025-12-25T00:00:00.000Z"
console.log(latestDate.toLocaleString()); // Locale-specific string



console.log("\nFuture date calculation---------");
let futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 30);  //adding 30 day 
console.log(futureDate);



console.log("\nDifference Between Dates------------");
let startDate = new Date("2023-05-01");
let endDate = new Date("2023-06-01");
let differenceInTime = endDate - startDate;
let differenceInDays = differenceInTime / (1000 * 3600 * 24);
console.log("Days: ", differenceInDays);
console.log("Milliseconds: ", differenceInTime);



