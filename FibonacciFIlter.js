// Name: Daniel Nguyen
const readlineSync = require('readline-sync');

let n = parseInt(readlineSync.question("Enter number of Fibonacci numbers: "));

let fib = [0, 1];

for (let i = 2; i < n; i++) {
  fib.push(fib[i - 1] + fib[i - 2]);
}

console.log("Full sequence: " + JSON.stringify(fib));

// Filter odd numbers
let oddFib = fib.filter(num => num % 2 !== 0);

console.log("Odd Fibonacci numbers: " + JSON.stringify(oddFib));