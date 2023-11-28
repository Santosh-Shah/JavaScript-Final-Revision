//Create object to represent a product from Myntra

// Create an object with two references and log changes to on object by changing the other one
let product = {
  name : 'Jeans',
  size : 'L',
  fit : 'slim fit',

  // Use bracket notation to display delivery-time
  'delivery-time' : 'Same day delivery'
};

// let copyProduct = product;
// console.log(product);

// copyProduct.size = 'XL';
// console.log(product);

console.log(product['delivery-time']);


// Given an object {message: 'good job', status: 'complete'}, use de-structuring to create two varaibles message and status.
let obj = { message: 'good job', status: 'complete' };

// Using destructuring to extract properties
let { message, status } = obj;

console.log(message); // Output: 'good job'
console.log(status);  // Output: 'complete'

// add function isIdenticalProduct to comparae two product objects

function isIdenticalProduct(product1, product2) {
  if (typeof product1 !== 'object' || typeof product2 !== 'object') {
    console.warn('Parameter passed was not an object');
    return false;
  }

  if (product1 == product2) {
    return true;
  }

  if (product1.name === product2.name
     && product1.size === product2.size
     && product1.fit === product2.fit) {
      return true;
  } else {
    return false;
  }
}

let product3 = {
  name : 'Jeans',
  size : 'L',
  fit : 'slim fit',

  // Use bracket notation to display delivery-time
  'delivery-time' : 'Same day delivery'
};

let product2 = {
  name : 'Jeans',
  size : 'L',
  fit : 'slim fit',

  // Use bracket notation to display delivery-time
  'delivery-time' : 'Same day delivery'
};

let product1 = {
  name : 'T-Short',
  size : 'XXL',
  fit : 'fit',

  // Use bracket notation to display delivery-time
  'delivery-time' : 'Same day delivery'
};


// product testing
console.log(isIdenticalProduct(product1, ''));
console.log(isIdenticalProduct(product3, product2));
console.log(isIdenticalProduct(product1, product3));