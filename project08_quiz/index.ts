#!usr/bin/env node

import inquirer, { Answers } from "inquirer";
import chalk from "chalk";
import chalkanimation from "chalk-animation";
import arrayShuffle from 'array-shuffle';
import { clear, table } from "console";

//chalkanimation.neon('Welcome to CLI Calculator');

let answer = [];
let Whole = new Array();

type Options = {
  Question: string;
  Right_Answer: string;
  Choices: string[];
  Score: number;
};

let questions:string[] = [
"Who published the Human Development Index (HDI)?",
"When did the Indochina war take place?",
"Who was the last Viceroy of India?",
"The term ecosystem was first coined by?",
"According to population which is the largest city of Pakistan?"
];

let right_answers:string[] = [
  "United Nations Development Programme (UNDP)",
  "1946 - 1975", 
  "Lord Louis Mountbatten",
  "Sir Arthur G. Tansley",
  "Karachi"
];

let wrong_choices = [
  ["United Nations Environmental Programme (UNEP)", "United Nations Population Fund (UNFPA)", "International Fund for Agricultural Development (IFAD)"],
  ["1941 - 1955","1960 - 1978","1878 - 1893"],
  ["Winston Churchill: Churchill","Dwight D. Eisenhower","Franklin D. Roosevelt"],
  ["Rachel Carson","Aldo Leopold","Jane Goodall"],
  ["Islamabad","Lahore","Multan"]
];

const sleep = ()=> {
    return new Promise((resolve) => {
        setTimeout(resolve, 1000);
    })
}

async function Welcome() {
let rainbow = chalkanimation.rainbow('Welcome to Quiz'); // Animation starts
await sleep();
rainbow.stop();
//console.log(chalk.yellowBright(chalk.bold("Developed By Mubashir Ahmed \n")));
}


async function askQuestion(){
  let Score = 0;
  for (let i = 0; i < questions.length; i++) {
    let ch_arr:string[] = []; 
    for (let j = 0; j < 3; j++) {
      ch_arr.push(wrong_choices[i][j]);
    }
    ch_arr.push(right_answers[i]);
    
    ch_arr = arrayShuffle(ch_arr);

    let Opt:Options = {
      Question: questions[i],
      Right_Answer: right_answers[i],
      Choices: ch_arr,
      Score: 0
    }
    Whole.push(Opt);
  }
  ;

  for (let index = 0; index < questions.length; index++) {
    await inquirer
    .prompt([
  
      {
        type:"list",
        name:"operator",
        message:Whole[index].Question,
        choices:Whole[index].Choices
    }
    ])
    .then((answers) => {
      
      if(Whole[index].Right_Answer == answers.operator){
        Score++;
      }
      let ans = {
        Question: Whole[index].Question,
        User_Answer: answers.operator
      }
      answer.push(ans);
    })
  }
  
  console.clear();
  console.log(chalk.bold(chalk.blueBright(`
  -------------------------
  Quiz Completed!
  Your Score = ${Score} / 5
  -------------------------
  `)))
}


async function start() {

    await Welcome();
    
   do{
    console.clear();
    await askQuestion();

    var again = await inquirer
  .prompt([
    {
        type:"input",
        name:"restart",
        message:"Do you want to run again? Press Y or N "
    }
  ])
   } while(again.restart == "y" || again.restart == "Y" || again.restart == "yes")
    
   console.log(chalk.yellowBright(chalk.bold("Developed By Mubashir Ahmed \n")));
}

start();