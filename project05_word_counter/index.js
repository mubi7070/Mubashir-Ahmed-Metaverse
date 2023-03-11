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
    let rainbow = chalkanimation.rainbow('Welcome to Word Counter'); // Animation starts
    await sleep();
    rainbow.stop();
    //console.log(chalk.yellowBright(chalk.bold("Developed By Mubashir Ahmed \n")));
}
async function askQuestion() {
    await inquirer
        .prompt([
        {
            type: "input",
            name: "word",
            message: "Enter Word / sentence: "
        }
    ])
        .then((answers) => {
        let user_input = answers.word;
        let wordlength = wordcount(user_input);
    });
}
async function wordcount(word) {
    let wordArray = word.split(' ');
    let length = wordArray.length;
    console.log(chalk.blueBright(`\nWord Count is ${chalk.yellowBright(length)}`));
    let charactercount = 0;
    for (let i = 0; i < wordArray.length; i++) {
        charactercount = charactercount + wordArray[i].length;
    }
    console.log(chalk.blueBright(`Character Count is ${chalk.yellowBright(charactercount)}`));
}
async function startAgain() {
    //console.log("Comp_choice = " + Comp_choice);
    await Welcome();
    do {
        console.clear();
        await askQuestion();
        var again = await inquirer
            .prompt([
            {
                type: "input",
                name: "restart",
                message: "Do you want to run again? Press Y or N "
            }
        ]);
    } while (again.restart == "y" || again.restart == "Y" || again.restart == "yes");
    console.log(chalk.yellowBright(chalk.bold("Developed By Mubashir Ahmed \n")));
}
startAgain();
