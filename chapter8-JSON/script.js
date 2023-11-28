// let product = {
//   name : 'T-Shirt',
//   price : 789,
//   rating : {
//     stars : 4.5,
//     noOfReviews : 453
//   }
// };

// console.log(typeof product);
// console.log(product);

// let str = JSON.stringify(product);
// console.log(typeof str);
// console.log(str);

// let newProduct = JSON.parse(str);
// console.log(typeof newProduct);
// console.log(newProduct);

// localStorage.setItem('Name', 'Santosh Shah');
// localStorage.setItem('Name', 'Hariom Shah');
// console.log(localStorage.getItem('Name'));

// let product = {
//   name : 'T-Shirt',
//   price : 789,
//   rating : {
//     stars : 40,
//     noOfReviews : 453
//   }
// };

// let str = JSON.stringify(product);
// localStorage.setItem('product', JSON.stringify(product));
// console.log(localStorage.getItem('product'));
// localStorage.setItem('shopName', "Santosh Kirana Pasal");

// localStorage.removeItem('product');
// localStorage.clear();

// let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getDate())
// console.log(myDate.getFullYear());
// console.log(myDate.getHours());
// console.log(myDate.getMinutes());
// console.log(myDate.getUTCMilliseconds());
// console.log(myDate.getMonth());


let button = document.createElement('button');

button.innerText = 'Click Me';
document.querySelector('.my-div').appendChild(button);

document.querySelector('.my-div').removeChild(button);




