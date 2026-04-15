// Name: Daniel Nguyen
const readlineSync = require('readline-sync');

// Fixed: convert input to integers
let start = parseInt(readlineSync.question("Enter start number: "));
let end = parseInt(readlineSync.question("Enter end number: "));

let count = 0;

for (let i = start; i <= end; i++) {
  // Fixed: use modulus operator (%) instead of division
  if (i % 2 == 0) {
    // Fixed: changed =+ to +=
    count += 1;
  }
}

console.log("Even numbers between " + start + " and " + end + ": " + count);
