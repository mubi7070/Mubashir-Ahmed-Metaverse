#!usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkanimation from "chalk-animation";
let student_array = new Array();
let Courses_array = new Array();
let courses_name = ["Data Science", "Big Data", "Artificial Intelligence", "Cloud Computing", "Project Management", "Business Intelligence", "Networking", "Software Development"];
let courses_fees = [5000, 8000, 10000, 9000, 8000, 7000, 7000, 8000];
for (let j = 0; j < courses_name.length; j++) {
    let cs = {
        Name: courses_name[j],
        Fees: courses_fees[j]
    };
    Courses_array.push(cs);
}
let flag = false;
const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });
};
async function Welcome() {
    let rainbow = chalkanimation.rainbow('Welcome to Student Management System'); // Animation starts
    await sleep();
    rainbow.stop();
    //console.log(chalk.yellowBright(chalk.bold("Developed By Mubashir Ahmed \n")));
}
async function ShowStudentList() {
    console.clear();
    //console.log(student_array[0].Student_ID);
    let listing = new Array();
    let student2;
    for (let j = 0; j < student_array.length; j++) {
        student2 = {
            Student_ID: student_array[j].Student_ID,
            Student_Name: student_array[j].Student_Name,
            Enrolled_Courses: student_array[j].Enrolled_Courses
        };
        listing.push(student2);
    }
    console.table(listing);
}
async function ViewBalance() {
    console.clear();
    console.table(student_array);
}
async function ShowCoursesList() {
    console.clear();
    //console.log(student_array[0].Student_ID);
    let listing = new Array();
    let student2;
    for (let j = 0; j < student_array.length; j++) {
        student2 = {
            Student_Name: student_array[j].Student_Name,
            Enrolled_Courses: student_array[j].Enrolled_Courses,
            Course_status: student_array[j].Course_status
        };
        listing.push(student2);
    }
    console.table(listing);
}
async function addstudent() {
    await inquirer
        .prompt([
        {
            type: "input",
            name: "Name",
            message: "Enter Student Name: "
        }
    ])
        .then((answers) => {
        let Id = GenerateID();
        let student = {
            Student_ID: Id,
            Student_Name: answers.Name,
            Enrolled_Courses: [],
            Course_status: "",
            Current_Balance: 0
        };
        student_array.push(student);
        console.log(chalk.greenBright(`Student Added Successfully! \n Student ID: ${chalk.yellowBright(Id)}`));
    });
}
function GenerateID() {
    let Id = Math.round(Math.random() * 100000);
    for (let i = 0; i < student_array.length; i++) {
        if (Id == student_array[i].Student_ID) {
            GenerateID();
        }
    }
    return Id;
}
async function Enroll() {
    await ShowStudentList();
    await inquirer
        .prompt([
        {
            type: "number",
            name: "studentid",
            message: "Enter Student Id to Enroll: "
        },
        {
            type: "list",
            name: "operator",
            message: "Select Course \n",
            choices: courses_name
        }
    ])
        .then((answers) => {
        for (let index = 0; index < student_array.length; index++) {
            if (answers.studentid == student_array[index].Student_ID) {
                student_array[index].Enrolled_Courses.push(answers.operator);
                student_array[index].Course_status = "Not Paid";
                break;
            }
            else {
                console.log("Please enter valid Student ID");
            }
        }
    });
    console.log(chalk.greenBright("Enrolled Successfully!"));
}
async function ShowCourse() {
    console.table(Courses_array);
}
async function Deletetask() {
    await ShowStudentList();
    await inquirer
        .prompt([
        {
            type: "number",
            name: "D_taskid",
            message: "Enter Task Id to delete an entry: "
        }
    ])
        .then((answers) => {
        if (answers.D_taskid < student_array.length) {
            student_array.splice(answers.D_taskid, 1);
        }
    });
    console.log(chalk.greenBright("Task Deleted Successfully!"));
}
async function main() {
    await inquirer
        .prompt([
        /* Pass your questions in here */
        {
            type: "list",
            name: "operator",
            message: "Which Depart you belong? \n",
            choices: ["Admin", "Finance", "Close"]
        }
    ])
        .then(async (answers) => {
        if (answers.operator == "Admin") {
            console.clear();
            await ManageStudent();
        }
        else if (answers.operator == "Finance") {
            console.clear();
            await ManageFinance();
        }
        else if (answers.operator == "Close") {
            console.clear();
            flag = true;
            console.log(chalk.blueBright("Thanks for using Student Management System"));
            console.log(chalk.yellowBright(chalk.bold("Developed By Mubashir Ahmed \n")));
        }
    });
}
async function Debit() {
    await ViewBalance();
    await inquirer
        .prompt([
        {
            type: "number",
            name: "id",
            message: "Enter Student Id: "
        },
        {
            type: "number",
            name: "D_amount",
            message: "Enter Amount To Debit: "
        }
    ]).then((Result) => {
        if (Result.D_amount > 0) {
            for (let index = 0; index < student_array.length; index++) {
                if (Result.id == student_array[index].Student_ID) {
                    student_array[index].Current_Balance = student_array[index].Current_Balance + Result.D_amount;
                    break;
                }
                else {
                    console.log("Please enter valid Student ID");
                }
            }
        }
        else {
            console.log("Incorrect amount");
        }
    });
}
async function Payment(SID, SFee) {
    for (let index = 0; index < student_array.length; index++) {
        if (SID == student_array[index].Student_ID) {
            console.log(chalk.greenBright(`Available Balance: ${student_array[index].Current_Balance}`));
            console.log(chalk.greenBright(`Total Fees: ${SFee}`));
            if (student_array[index].Current_Balance >= SFee) {
                student_array[index].Current_Balance = student_array[index].Current_Balance - SFee;
                student_array[index].Course_status = "Paid";
                console.log(chalk.bold(chalk.cyanBright("Fees Paid Successfully!")));
            }
            else {
                console.log("Insufficient Balance! Kindly debit the relevant amount first");
            }
        }
    }
}
async function Pay() {
    let TotalFee = 0;
    await ViewBalance();
    await inquirer
        .prompt([
        {
            type: "number",
            name: "id",
            message: "Enter Student Id: "
        }
    ]).then(async (Result) => {
        for (let index = 0; index < student_array.length; index++) {
            if (Result.id == student_array[index].Student_ID) {
                //console.log(chalk.greenBright(`Available Balance: ${student_array[index].Current_Balance}`));
                for (let i = 0; i < student_array[index].Enrolled_Courses.length; i++) {
                    for (let j = 0; j < Courses_array.length; j++) {
                        if (student_array[index].Enrolled_Courses[i] == Courses_array[j].Name) {
                            TotalFee = TotalFee + Courses_array[j].Fees;
                        }
                    }
                }
                await Payment(student_array[index].Student_ID, TotalFee);
                break;
            }
            else {
                console.log("Please enter valid Student ID");
                await Pay();
            }
        }
    });
}
async function ManageFinance() {
    console.clear();
    let check = false;
    do {
        await inquirer
            .prompt([
            /* Pass your questions in here */
            {
                type: "list",
                name: "operator",
                message: "Which operation you want to perform? \n",
                choices: ["View Balance", "Debit Amount", "Pay tuition fees", "Show Courses List", "Close"]
            }
        ])
            .then(async (answers) => {
            if (answers.operator == "View Balance") {
                console.clear();
                await ViewBalance();
            }
            else if (answers.operator == "Debit Amount") {
                console.clear();
                await Debit();
            }
            else if (answers.operator == "Pay tuition fees") {
                await Pay();
            }
            else if (answers.operator == "Show Courses List") {
                console.clear();
                await ShowCourse();
            }
            else if (answers.operator == "Close") {
                console.clear();
                check = true;
            }
        });
    } while (check == false);
}
async function ManageStudent() {
    console.clear();
    let check = false;
    do {
        await inquirer
            .prompt([
            /* Pass your questions in here */
            {
                type: "list",
                name: "operator",
                message: "Which operation you want to perform? \n",
                choices: ["Add Student", "Enrollment", "Show Course status", "Show Student List", "Show Courses List", "Close"]
            }
        ])
            .then(async (answers) => {
            if (answers.operator == "Add Student") {
                console.clear();
                await addstudent();
            }
            else if (answers.operator == "Enrollment") {
                console.clear();
                await Enroll();
            }
            else if (answers.operator == "Show Course status") {
                console.clear();
                await ShowCoursesList();
            }
            else if (answers.operator == "Show Student List") {
                console.clear();
                await ShowStudentList();
            }
            else if (answers.operator == "Show Courses List") {
                console.clear();
                await ShowCourse();
            }
            else if (answers.operator == "Close") {
                console.clear();
                check = true;
            }
        });
    } while (check == false);
}
async function startAgain() {
    await Welcome();
    do {
        await main();
    } while (flag == false);
}
startAgain();
