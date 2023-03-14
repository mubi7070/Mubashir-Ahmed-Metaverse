#!usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkanimation from "chalk-animation";
//chalkanimation.neon('Welcome to CLI Calculator');
let opponent = ["Skeleton", "Assassin", "Zombie"];
let Enemy = "";
let player_HP = 100;
let Enemy_HP = 0;
let Turn = 0;
let Check = false;
let WinCount = 0;
let LoseCount = 0;
let potion = 0;
const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });
};
async function Welcome() {
    let rainbow = chalkanimation.rainbow('Welcome to Adventure Game'); // Animation starts
    await sleep();
    rainbow.stop();
    //console.log(chalk.yellowBright(chalk.bold("Developed By Mubashir Ahmed \n")));
}
async function EnemyAssign() {
    let randomNum = (0 + Math.round(Math.random() * 2));
    Enemy = opponent[randomNum];
}
async function Enemy_HP_Assign() {
    let randomNum1 = (10 + Math.round(Math.random() * 80));
    Enemy_HP = randomNum1;
}
async function ShowStatus() {
    console.log(`
  # ${Enemy} has appeared #

  Your HP: ${player_HP}
  ${Enemy}'s HP: ${Enemy_HP}
  You have ${potion} Health Potion!

  `);
}
async function RunMe() {
    console.log(`
  ---------------------------------------------------------------
  You run away from the ${Enemy}!
  Now the game starts again and a new enemy appeared with new HP.
  ---------------------------------------------------------------
  `);
    Enemy_HP = -1;
}
async function Drink_Health_Potion() {
    if (player_HP == 100) {
        console.log("Your HP is already Full! No need for a health potion.");
    }
    else if (potion > 0) {
        potion--;
        player_HP = player_HP + 30;
        if (player_HP > 100) {
            player_HP = 100;
        }
        console.log(`
  > You drink a health potion, healing yourself for 30
  > You now have ${player_HP} HP.
  > You have ${potion} health potions left
    `);
    }
    else {
        console.log("You have no health potions left! Defeat an enemy to get one!");
    }
}
async function Attack() {
    let RN_Enemy = (0 + Math.round(Math.random() * 50));
    let RN_Player = (0 + Math.round(Math.random() * 50));
    console.log(`
  ---------------------------------------
  > You strike the Skeleton for ${RN_Enemy} damages
  > You receive ${RN_Player} in retaliation!
  ---------------------------------------
  `);
    Enemy_HP = Enemy_HP - RN_Enemy;
    player_HP = player_HP - RN_Player;
}
async function Continue() {
    console.clear();
    do {
        if (Turn == 0) {
            await EnemyAssign();
            await Enemy_HP_Assign();
            Turn++;
        }
        else {
            await ShowStatus();
            await inquirer
                .prompt([
                {
                    type: "list",
                    name: "option",
                    message: "What would you like to do?",
                    choices: ["Attack", "Drink Health potion", "Run!"]
                }
            ])
                .then(async (answers) => {
                if (answers.option == "Attack") {
                    if (Enemy_HP > 0 && player_HP > 0) {
                        await Attack();
                        Check = false;
                    }
                    if (Enemy_HP <= 0) {
                        potion++;
                        console.log(`
  ------------------------------
  Hurray! ${Enemy} was defeated!
  You have ${player_HP} HP left.
  ${Enemy} has dropped Health potion and now you have ${potion} Health Potion!
  ------------------------------
          `);
                        Check = true;
                    }
                    if (player_HP <= 0) {
                        console.log(`
  ----------------------------------------------------------
  You have taken too much damage, you are too weak to go on!
  You limp out of the dungeon, weak from battle.
  #######################
  # Thanks For Playing! #
  #######################
  ----------------------------------------------------------
          `);
                        Check = true;
                    }
                }
                else if (answers.option == "Drink Health potion") {
                    await Drink_Health_Potion();
                    Check = false;
                }
                else if (answers.option == "Run!") {
                    await RunMe();
                    console.log("In Run");
                    await EnemyAssign();
                    await Enemy_HP_Assign();
                    await Continue();
                }
                Turn++;
            });
        }
    } while (Check == false);
}
async function startAgain() {
    console.clear();
    let flag = true;
    //console.log("Comp_choice = " + Comp_choice);
    await Welcome();
    do {
        //await askQuestion();
        //console.log("What would you like to do now?");
        var again = await inquirer
            .prompt([
            {
                type: "list",
                name: "restart",
                message: "What would you like to do now?",
                choices: ["Continue Fighting", "Exit Dungeon"]
            }
        ]).then(async (answers) => {
            if (answers.restart == "Continue Fighting") {
                if (player_HP < 0) {
                    LoseCount++;
                    player_HP = 100;
                    potion = 0;
                }
                if (Enemy_HP < 0) {
                    WinCount++;
                    await EnemyAssign();
                    await Enemy_HP_Assign();
                }
                await Continue();
            }
            else if (answers.restart == "Exit Dungeon") {
                console.log(`
      #######################
      # Thanks For Playing! #
      #######################
      `);
                flag = false;
            }
        });
    } while (flag == true);
    console.log(chalk.yellowBright(chalk.bold("Developed By Mubashir Ahmed \n")));
}
startAgain();
