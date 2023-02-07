#!usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkanimation from "chalk-animation";
import { exit } from "process";
//chalkanimation.neon('Welcome to CLI Calculator');
const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 2100);
    });
};
async function Welcome(credentials) {
    let rainbow = chalkanimation.rainbow('Welcome to TypeScript - Node - ATM'); // Animation starts
    await sleep();
    rainbow.stop();
    //console.log(`User ID: ${credentials.userid} and User Pin: ${credentials.userpin}`);
    //console.log(`User ID: ${User_ID} and User Pin: ${User_Pin}`);
    let calc = chalkanimation.karaoke(` 
_____________________
|  _________________  |
| | TS - Node - ATM | |
| |_____WELCOME_____| | 
|  _________________  |
| |Length: 4 Digits | |
| |User ID:         | |
| |->  ${credentials.userid}           
| |_________________| |
| |Length: 6 Digits | |
| |User Pin:        | |
| |->  ${credentials.userpin}          
| |_________________| |
| |                 | |
| |-Please Proceed- | |
|_______-Now-_________|
|_____________________|

`);
    await sleep();
    calc.stop();
    console.log(chalk.yellowBright(chalk.bold("Developed By Mubashir Ahmed \n")));
}
function UserID() {
    let ID_choice = Math.round(Math.random() * 10000);
    return ID_choice;
}
function UserPin() {
    let PIN_choice = Math.round(Math.random() * 1000000);
    return PIN_choice;
}
async function authenticate(arr) {
    console.log("Kindly Enter Login Details Here \n");
    let check = false;
    await inquirer
        .prompt([
        /* Pass your questions in here */
        {
            type: "number",
            name: "userId1",
            message: "Enter User Id: "
        },
        {
            type: "number",
            name: "userPin1",
            message: "Enter User Pin: "
        }
    ]).then((Result) => {
        // Use user feedback for... whatever!!
        //console.log(answers);
        if (Result.userId1 == arr.userid && Result.userPin1 == arr.userpin) {
            //console.log("I am corect");
            check = true;
            return check;
        }
    });
    return check;
}
async function validate() {
    //let arr:number[] = new Array();
    let User_ID = UserID();
    let User_Pin = UserPin();
    let details = {
        userid: User_ID,
        userpin: User_Pin,
    };
    await Welcome(details);
    //console.log(`User ID: ${details.userid} and User Pin: ${details.userpin}`);
    await inquirer
        .prompt([
        /* Pass your questions in here */
        {
            type: "list",
            name: "operator",
            message: "Which operation you want to perform? \n",
            choices: ["Login", "Create Account", "Logout"]
        }
    ])
        .then(async (answers) => {
        // Use user feedback for... whatever!!
        // console.log(answers);
        if (answers.operator == "Login") {
            let flag = await authenticate(details);
            if (flag === true) {
                console.clear();
                //ATM Options
                let Acc_Balance = 0;
                do {
                    console.clear();
                    let balance = await Options(Acc_Balance);
                    Acc_Balance = balance;
                    var again = await inquirer
                        .prompt([
                        /* Pass your questions in here */
                        {
                            type: "input",
                            name: "restart",
                            message: "\nDo you want to perform another Operation? Press Y or N "
                        }
                    ]);
                } while (again.restart == "y" || again.restart == "Y" || again.restart == "yes");
                console.log("Thankyou for banking with us");
            }
            else {
                console.log("You have entered Wrong Credentials");
            }
        }
        else if (answers.operator == "Create Account") {
            console.clear();
            startAgain();
        }
        else if (answers.operator == "Logout") {
            console.clear();
            console.log("Thankyou for banking with us");
            exit;
        }
    });
}
//
async function Options(Account_Balance) {
    await inquirer
        .prompt([
        /* Pass your questions in here */
        {
            type: "list",
            name: "operator",
            message: "Which operation you want to perform? \n",
            choices: ["Debit", "Credit", "Current Balance"]
        },
    ])
        .then(async (resultant) => {
        if (resultant.operator == "Debit") {
            let Balance1 = await Debit(Account_Balance);
            Account_Balance = Number(Balance1);
            console.log("Balance: " + Account_Balance);
        }
        else if (resultant.operator == "Credit") {
            let Balance2 = await Credit(Account_Balance);
            Account_Balance = Number(Balance2);
            console.log("Balance: " + Account_Balance);
        }
        else if (resultant.operator == "Current Balance") {
            console.log(`Current Balance is Rs. ${Account_Balance}`);
        }
    });
    return Account_Balance;
}
async function Debit(amount) {
    console.log("Kindly Enter Amount You want to Debit: \n");
    await inquirer
        .prompt([
        {
            type: "number",
            name: "D_amount",
            message: "Enter Amount: "
        }
    ]).then((Result) => {
        if (Result.D_amount > 0) {
            amount = amount + Result.D_amount;
        }
        else {
            console.log("Incorrect amount");
        }
    });
    return amount;
}
async function Credit(amount) {
    console.log("Kindly Enter Amount You want to Credit: \n");
    await inquirer
        .prompt([
        {
            type: "number",
            name: "C_amount",
            message: "Enter Amount: "
        }
    ]).then((Result) => {
        if (Result.C_amount > 0) {
            amount = amount - Result.C_amount;
        }
        else {
            console.log("Incorrect amount");
        }
    });
    return amount;
}
async function startAgain() {
    await validate();
}
startAgain();
