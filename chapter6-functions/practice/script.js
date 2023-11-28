// function evenOdd(num) {
//   if (num % 2 == 0) {
//     return "It's even number";
//   } else {
//     return "It's odd number"
//   }
// }

// console.log(`${evenOdd(9)}`);


function largestNumber(num1, num2) {
  if (num1 > num2) {
    return `${num1} is largest!`
  } else if (num2 > num1) {
    return `${num2} is largest!`
  } else {
    return `Both are equal!`

  }
}

console.log(largestNumber(100, 5000));