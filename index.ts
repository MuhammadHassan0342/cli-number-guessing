#! /usr/bin/env node

import inquirer from "inquirer";

// 1) Computer will generate a randam number - Done.

// 2) User input for guessing number - Done

// 3) Compare user input conputer generated number and show result - Done 


const randamNumber = Math.floor(Math.random() * 6 + 1);

console.log("Welcome to number Guessing Game");

const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6: ",
        },
]);
if(answers.userGuessedNumber === randamNumber ){
    console.log("Congtratulation! you guessed right number.");
} else {
    console.log("you guessed wrong number");
}