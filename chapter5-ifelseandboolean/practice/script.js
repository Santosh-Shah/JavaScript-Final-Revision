let gender = "female";
let age = 8;

let discount;

if (age <= 5) {
  discount = 100;
} else if (gender === "female" || age <= 8) {
  discount = 50; 
} else if (age >= 65) {
  discount = 30;
} else {
  discount = 0;
}

console.log(`Your final discount is ${discount}`);