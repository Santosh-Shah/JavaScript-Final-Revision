// const Person = {
//     firstName: "Ramu",
//     lastName: "Gupta",
//     age: 45
// }

// // destructuring assignment
// const {firstName, lastName, age} = Person;
// console.log(firstName);
// console.log(lastName);
// console.log(age);



// nested object

// const Person = {
//     name: {
//         firstName: "Rohit",
//         lastName: "Gupta"
//     },
//     age: 60
// }

// const {name: {firstName, lastName}, age} = Person;
// console.log(firstName);
// console.log(lastName);
// console.log(age);









fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Parsed JSON data
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });




  const data = { firstName: 'John', lastName: 'Doe' };

fetch('https://api.example.com/save', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => {
  console.log('Data saved:', data);
})
.catch(error => {
  console.error('Error saving data:', error);
});
