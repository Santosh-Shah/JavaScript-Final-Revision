let singleQuoted = 'santosh shah';
let doubleQuoted = "World";
let backticks = `Backticks`;

console.log(singleQuoted);
console.log(doubleQuoted);
console.log(backticks);




// string concatenation
let greeting = "Hello";
let name = "Santosh";
let msg = greeting + "! " + name;
console.log(msg);

console.log(`length of greeting: ${greeting.length}`);


// String Escape Character
console.log("\'Hello\' everyone \"how\" are you, \\would\\ you \nplease tell \tme your name!");



// Methods of string
let collegeName = "  my college name is: \"Vedas College\"";
console.log(collegeName);
console.log(collegeName.toUpperCase());
console.log(collegeName.toLowerCase());
console.log(collegeName.charAt(3));
console.log(collegeName.substring(1,5));
console.log(collegeName.indexOf("n"))
console.log(collegeName.split())
console.log(collegeName.trim())


// String interpolation(Template Literals)
let randomName = "Prakash Vai";
let response = `Hello! ${randomName}`;
console.log(response);
