#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 2006;
// Step 01
let pinAnswer = await inquirer.prompt([
    {
        name: "q1",
        message: "Enter Your Pin",
        type: "number",
    },
]);
// Step 02
if (pinAnswer.q1 === myPin) {
    console.log("Correct Pin Code!!!");
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "Please Select Option",
            type: "list",
            choices: ["withdraw", "Check Balance", "Fastcash"],
        },
    ]);
    console.log(operationAnswer);
    // Step 03
    if (operationAnswer.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Select Your Amount",
                type: "number",
            },
        ]);
        if (amountAns.amount < myBalance) {
            myBalance -= amountAns.amount;
            console.log("Your Remaining Balance Is:" + myBalance);
        }
        else {
            console.log("Insufficient Balance");
        }
    }
    // Step 04
    else if (operationAnswer.operation === "Check Balance") {
        console.log("Your Current Balnce Is:" + myBalance);
    }
    else if (operationAnswer.operation === "Fastcash") {
        let Fast = await inquirer.prompt([
            {
                name: "fastcash",
                message: "How Much Moiney Do You Want To Withdraw",
                type: "list",
                choices: ["1000", "2500", "5000", "10000"],
            },
        ]);
        if (Fast.fastcash === "1000") {
            console.log(`Your Remaining Balance is: ${myBalance -= Fast.fastcash}`);
        }
        if (Fast.fastcash === "2500") {
            console.log(`Your Remaining Balance is: ${myBalance -= Fast.fastcash}`);
        }
        if (Fast.fastcash === "5000") {
            console.log(`Your Remaining Balance is: ${myBalance -= Fast.fastcash}`);
        }
        if (Fast.fastcash === "10000") {
            console.log(`Your Remaining Balance is: ${myBalance -= Fast.fastcash}`);
        }
    }
}
else {
    console.log("Incorrect Pin Number");
}
;
