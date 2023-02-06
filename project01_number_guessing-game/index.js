#!usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkanimation from "chalk-animation";
//chalkanimation.neon('Welcome to CLI Calculator');
const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 1500);
    });
};
async function Welcome() {
    let rainbow = chalkanimation.rainbow('Welcome to Number Guessing Game'); // Animation starts
    await sleep();
    rainbow.stop();
    //console.log(chalk.yellowBright(chalk.bold("Developed By Mubashir Ahmed \n")));
}
async function askQuestion(ComputerChoice) {
    let flag = false;
    await inquirer
        .prompt([
        {
            type: "number",
            name: "number",
            message: "Which number you want to choose from 1 to 10?: "
        }
    ])
        .then((answers) => {
        let userchoice = answers.number;
        if (userchoice === ComputerChoice) {
            console.log(chalk.greenBright("Congrats! Choice is correct!"));
            flag = true;
        }
        else {
            console.log(chalk.bgRed("Sorry! Choice is wrong!"));
            flag = false;
        }
    });
    return flag;
}
function Computernumber() {
    let C_choice = Math.round(Math.random() * 10);
    return C_choice;
}
async function startAgain() {
    let Comp_choice = Computernumber();
    //console.log("Comp_choice = " + Comp_choice);
    await Welcome();
    let Score = 0;
    let Attempts = 0;
    do {
        let a = await askQuestion(Comp_choice);
        if (a === true) {
            Score++;
            Comp_choice = Computernumber();
            console.log(chalk.bgYellow("Computer Choices has changed. Play more and Get Score!"));
        }
        Attempts++;
        console.log(chalk.blueBright(`Game Summary: Score is ${Score} - Attempts is ${Attempts}`));
        var again = await inquirer
            .prompt([
            {
                type: "input",
                name: "restart",
                message: "Do you want to perform another Operation? Press Y or N "
            }
        ]);
    } while (again.restart == "y" || again.restart == "Y" || again.restart == "yes");
    console.log(chalk.yellowBright(chalk.bold("Developed By Mubashir Ahmed \n")));
}
startAgain();
