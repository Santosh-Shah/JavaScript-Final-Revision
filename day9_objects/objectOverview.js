console.log("\n-----------------Methods for Defining JavaScript Objects--------------------");
// const person = {
//     firstName: "Hariom",
//     lastName: "Shah",
//     age: 25
// };

// console.log(person);

// ussing new keyword
// const person = new Object();
// person.firstName = "Rajababu";
// person.lastName = "Yadav";
// person.age = 22;

// console.log(person);


// using a object constructor in function
// function Person(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
// }

// const friendsInfo = new Person("Hariom", "Mahato", 25);
// const myInfo = new Person("Santosh", "Shah", 26);
// console.log(typeof friendsInfo);
// console.log(myInfo);

console.log("\n-----------JavaScript Object Methods-------------")


// Object.assign() => This method copies properties from one or more source objects to a target object
// const person = {firstName: "Santosh"};
// const additionInfo = {lastName: "Shah", age: 25};

// copying addtionInfo into person object
// Object.assign(person, additionInfo);
// console.log(person);

// copying person into addtion object
// Object.assign(additionInfo, person);
// console.log(additionInfo);


// const personProto = {
//     greet() {
//         console.log(`hello, my name is ${this.firstName}`);
//     }
// };

// const person = Object.create(personProto);
// person.firstName = "Jubin";
// person.greet();


// const entries = [
//     ["firstName", "Hariom"],
//     ["lastName", "Yadav"],
//     ["age", 25]
// ];

// console.log(typeof Object.fromEntries(entries));
// console.log(Object.fromEntries(entries));


// const person = {name: "Rabi", age: 25};
// const entries  = Object.entries(person);
// console.log(entries);


// const entries = [['name', 'John'], ['age', 30]];
// const person = Object.fromEntries(entries); // { name: "John", age: 30 }
// console.log(person);

// const person = {name: "John", age: 30};
// console.log(Object.keys(person));       // it return keys in array form
// console.log(Object.values(person));     // it return value in the form of array





// function Person(first, last, age, eyeColor) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eyeColor;
//   }
  
//   Person.prototype.nationality = "English";
//   console.log(Person);
  



// function Person(first, last, age, eyeColor) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eyeColor;
//   }
  
//   Person.prototype.fullName = function() {
//     return this.firstName + " " + this.lastName;
//   };
  

//   console.log(Person);






