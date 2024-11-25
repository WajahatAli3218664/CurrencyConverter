#! /usr/bin/env node
import inquirer from "inquirer"

console.log("----------- Welcome to Currency Converter/ Currency Exchanger ------------");

const currency: any = {
    PKR: 1,  //Base currency
    USD: 0.006,
    EURO: 0.0034,
    DIRHAM: 0.013,
    INR: 0.30,
    YEN: 0.55,
    GBP: 0.0029
}
let userAns = await inquirer.prompt([
    {
        name: "from",
        message: "Select the currency that you want to change from:",
        type:"list",
        choices: ["PKR", "USD", "EURO", "DIRHAM", "INR", "YEN", "GBP"]
    },
    {
        name: "to",
        message: "Select the currency that you want to change:",
        type:"list",
        choices: ["PKR", "USD", "EURO", "DIRHAM", "INR", "YEN", "GBP"]
    },
    {
        name:"amount", 
        type: "number",
        message: "Enter your amount to change"
    }
])
let fromAmount = currency [userAns.from];
let toAmount = currency [userAns.to];
let amount = userAns.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount 
console.log(`Your converted amount from ${userAns.from} to ${userAns.to} is ${convertedAmount}`);
let roundAmount = Math.round(convertedAmount)
console.log("Round off amount",roundAmount);

console.log("****** Thanks for Using ******");



