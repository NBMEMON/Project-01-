#! /usr/bin/env node 
import inquirer from "inquirer";
console.log("Welcome to My first Ever Project using Typescript");
console.log("          A Simple CLI Calculator          ");
const answer = await inquirer.prompt([
    { message: "Write First Number ", type: "number", name: "firstNumber" },
    { message: "Write Second Number ", type: "number", name: "secondNumber" },
    {
        message: "Select any operator for operations",
        type: "list",
        choices: ["Addition", "Subtraction", "Multiplication", "Divison"],
        name: "operator",
    },
]);
// conditional Statement if-else;
if (answer.operator == "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator == "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator == "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator == "Divison") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please Choose Valid Operator");
}
