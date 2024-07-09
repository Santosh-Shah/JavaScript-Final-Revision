// function sayHello() {
//     console.log("Say Hello!!")
// }

// setTimeout(sayHello, 5000);





// function printTime() {
//     console.log(new Date().toLocaleDateString());
// }

// setInterval(printTime, 5000);




// function sayHello() {
//     console.log("Say Hello!!")
// }

// const timeOutId = setTimeout(sayHello, 2000);
// // clearTimeout(timeOutId);



function printTime() {
    console.log(new Date().toLocaleDateString());
}

const interValid = setInterval(printTime, 3000);
setTimeout(() => clearInterval(interValid), 7000);
