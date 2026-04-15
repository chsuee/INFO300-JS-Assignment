// Name: Daniel Nguyen
const readlineSync = require('readline-sync');

let n;

while (true) {
  n = parseInt(readlineSync.question("Enter a number (1 - 1000): "));
  
  if (!isNaN(n) && n > 0 && n <= 1000) {
    break;
  }
  
  console.log("Invalid input. Please enter a number between 1 and 1000.");
}

// Function to check prime
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Find primes
let primes = [];
for (let i = 2; i <= n; i++) {
  if (isPrime(i)) {
    primes.push(i);
  }
}

console.log("Primes up to " + n + ": " + JSON.stringify(primes));

// Find gaps
let maxGap = 0;
let gapStart = 0;
let totalGap = 0;

for (let i = 1; i < primes.length; i++) {
  let gap = primes[i] - primes[i - 1];
  totalGap += gap;

  if (gap > maxGap) {
    maxGap = gap;
    gapStart = primes[i - 1];
  }
}

let avgGap = (totalGap / (primes.length - 1)).toFixed(2);

console.log("Largest gap is " + maxGap + ", between " + gapStart + " and " + (gapStart + maxGap));
console.log("Average gap is " + avgGap);