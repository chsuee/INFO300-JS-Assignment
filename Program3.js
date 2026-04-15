// Name: Daniel Nguyen
const readlineSync = require('readline-sync');

let input = readlineSync.question("Enter a string: ").toLowerCase();

let freq = {};
let firstRepeat = null;

// Count frequencies
for (let char of input) {
  if (char >= 'a' && char <= 'z') {
    if (freq[char]) {
      freq[char]++;
      if (!firstRepeat) {
        firstRepeat = char;
      }
    } else {
      freq[char] = 1;
    }
  }
}

console.log("Letter frequencies:");
for (let key in freq) {
  console.log(key + ": " + freq[key]);
}

console.log("First repeated letter: " + (firstRepeat || "None"));