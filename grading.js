const readline = require('readline-sync');

function getLetterGrade(score) {
    if (score >= 90) return 'A';
    else if (score >= 80) return 'B';
    else if (score >= 70) return 'C';
    else if (score >= 60) return 'D';
    else return 'F';
}

let currentAvg;
do {
    currentAvg = parseFloat(readline.question("Enter current average: "));
} while (currentAvg < 0 || currentAvg > 100 || isNaN(currentAvg));

let originalLetter = getLetterGrade(currentAvg);

console.log("\nEnter hypothetical final exam scores (type -1 to stop):");

while (true) {
    let finalExam = parseFloat(readline.question("Final exam score: "));

    if (finalExam === -1) break;

    if (finalExam < 0 || finalExam > 100 || isNaN(finalExam)) {
        console.log("Invalid score. Try again.");
        continue;
    }

    let finalGrade = (currentAvg * 0.75) + (finalExam * 0.25);
    let newLetter = getLetterGrade(finalGrade);

    let status;
    if (newLetter > originalLetter) status = "Improved";
    else if (newLetter < originalLetter) status = "Declined";
    else status = "Stayed the same";

    console.log("\n--- Result ---");
    console.log(`Final Exam Score: ${finalExam}`);
    console.log(`Final Course Average: ${finalGrade.toFixed(2)}`);
    console.log(`Letter Grade: ${newLetter}`);
    console.log(`Status: ${status}`);
}