#!usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkanimation from "chalk-animation";
import Choices from "inquirer/lib/objects/choices.js";
import { table } from "console";


let list_array = new Array();
let flag = false;

type task = {
    Name: string;
    Details: string;
    status: boolean;
};


const sleep = ()=> {
    return new Promise((resolve) => {
        setTimeout(resolve, 1500);
    })
}

async function Welcome() {
let rainbow = chalkanimation.rainbow('Welcome to Todo List'); // Animation starts
await sleep();
rainbow.stop();

//console.log(chalk.yellowBright(chalk.bold("Developed By Mubashir Ahmed \n")));
}

async function ShowList(){
    console.clear();
    console.table(list_array);
}

async function addtask(){
    await inquirer
    .prompt([
      {
          type:"input",
          name:"Name",
          message:"Enter Task Name: "
      },
      {
          type:"input",
          name:"Details",
          message:"Enter Task Details: "
      }
    ])
    .then((answers) => {

        let mytask:task = {
            Name: answers.Name,
            Details: answers.Details,
            status: false
        };
        list_array.push(mytask);
    });
console.log(chalk.greenBright("Task Added Successfully!"));
}

async function Updatetask(){
    console.log("I am in update");
    
    await ShowList();
    await inquirer
    .prompt([
      {
          type:"number",
          name:"taskid",
          message:"Enter Task Id to Update status as finished: "
      }
    ])
    .then((answers) => {
        if(answers.taskid < list_array.length){
            list_array[answers.taskid].status = true;
        }
    });
console.log(chalk.greenBright("Task Updated Successfully!"));
}

async function Deletetask(){
    await ShowList();
    await inquirer
    .prompt([
      {
          type:"number",
          name:"D_taskid",
          message:"Enter Task Id to delete an entry: "
      }
    ])
    .then((answers) => {
        if(answers.D_taskid < list_array.length){
            list_array.splice(answers.D_taskid,1);
        }
    });
console.log(chalk.greenBright("Task Deleted Successfully!"));
}

async function Manage(){
    ShowList();
    await inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type:"list",
        name:"operator",
        message:"Which operation you want to perform? \n",
        choices:["Add Task","Update Task","Delete Task","Show List","Close"]
    }
  ])
  .then(async (answers) => {
    if (answers.operator == "Add Task") {
        console.clear();
        await addtask();
    } 
    else if (answers.operator == "Update Task"){
        console.clear();
        await Updatetask();
    }
    else if (answers.operator == "Delete Task"){
        console.clear();
        await Deletetask();
    }
    else if (answers.operator == "Show List"){
        console.clear();
        await ShowList();
    }
    else if (answers.operator == "Close"){
        console.clear();
        await ShowList();
        flag = true;
        console.log(chalk.blueBright("Thanks for using Todo List"));
        console.log(chalk.yellowBright(chalk.bold("Developed By Mubashir Ahmed \n")));
    }
  })
}

async function startAgain () {
    await Welcome();
   do{
    await Manage();
   } while(flag == false);
}

startAgain();