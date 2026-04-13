const readline = require('readline-sync');

let employees = [];

for (let i = 0; i < 3; i++) {
    console.log(`\nEmployee ${i + 1}`);

    let name = readline.question("Enter name: ");

    let wage;
    do {
        wage = parseFloat(readline.question("Enter hourly wage: "));
    } while (wage <= 0 || isNaN(wage));

    let hours;
    do {
        hours = parseFloat(readline.question("Enter hours worked: "));
    } while (hours < 0 || hours > 80 || isNaN(hours));

    let regularHours = Math.min(40, hours);
    let overtimeHours = Math.max(0, hours - 40);

    let regularPay = regularHours * wage;
    let overtimePay = overtimeHours * wage * 1.5;
    let totalPay = regularPay + overtimePay;

    employees.push({
        name,
        hours,
        regularPay,
        overtimePay,
        totalPay
    });
}

let highest = employees[0];
for (let emp of employees) {
    if (emp.totalPay > highest.totalPay) {
        highest = emp;
    }
}

console.log("\n=== Payroll Report ===");
for (let emp of employees) {
    console.log(`\nName: ${emp.name}`);
    console.log(`Hours: ${emp.hours}`);
    console.log(`Regular Pay: $${emp.regularPay.toFixed(2)}`);
    console.log(`Overtime Pay: $${emp.overtimePay.toFixed(2)}`);
    console.log(`Total Pay: $${emp.totalPay.toFixed(2)}`);
}

console.log(`\n*** Highest Paid Employee: ${highest.name} ($${highest.totalPay.toFixed(2)}) ***`);