// Question 1
function receivingFunction(arg1) {
  if (typeof arg1 === "function") arg1();
  else console.log("The argument is not a function");
}

function callbackFunction() {
  console.log("I am a callback function");
}

receivingFunction(callbackFunction);

// Question 2
const prizes = ["Bag of bananas", "Box of frogs", "Car of clowns"];

for (let i = 0; i < prizes.length; i++) {
  console.log(`Prize ${i + 1}: ${prizes[i]}`);
}

prizes.forEach((prize, index) => {
  console.log(`Prize ${index + 1}: ${prize}`);
});

// Question 3
const numberOfSeconds = 3;

function logMessage() {
  console.log(`I waited ${numberOfSeconds} seconds before executing`);
}

setTimeout(logMessage, numberOfSeconds * 1000);

// Question 4
const interval = 1500;
let count = 0;
const limit = 4;

function logNumber() {
  count++;

  console.log(count);

  if (count === limit) {
    clearInterval(intervalId);
  }
}

const intervalId = setInterval(logNumber, interval);
