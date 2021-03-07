//dependencies
const inquirer = require("inquirer");
const path = require("path");
// const fs = require("fs");
//classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const makePage = require("./src/template.js");

const teamMembers = [];
const idArray = [];

function options() {
    // createManager();
// }

function createManager() {
    console.log("Please build a team");
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the team manager's name?"
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the team manager's ID?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the team manager's email?",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the team manager's Office Number?",
        }
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        console.log(teamMembers);
        idArray.push(answers.managerId);
        createTeam();
    });
}

function createTeam() {

    inquirer.prompt([
        {
            type: "list",
            name: "memberChoice",
            message: "Which type of team member would you like to add?",
            choices: [
                "Engineer",
                "Intern",
                "I don't want to add any more team members"
            ]
        }
    ]).then(userChoice => {
        switch (userChoice.memberChoice) {
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            case "I don't want to add any more team members":
                buildTeam();
                console.log(teamMembers);
                break;
        }
    });
}

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?",

        },
        {
            type: "input",
            name: "engineerId",
            message: "What is your engineer's Id?",
        },
        {
            type: "input",
            name: "enginEmail",
            message: "What is the engineer's email?",
        },
        {
            type: "input",
            name: "gitHubUserName",
            message: "What is the engineer's Github username?",
        }
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.enginEmail, answers.gitHubUserName);
        teamMembers.push(engineer);
        console.log(teamMembers);
        idArray.push(answers.engineerId);
        createTeam();
    });
}

function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the intern's name?",

        },
        {
            type: "input",
            name: "internId",
            message: "What is your intern's Id?",
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the intern's email?",
        },
        {
            type: "input",
            name: "internSchool",
            message: "What is the intern's school?",
        }
    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        teamMembers.push(intern);
        console.log(teamMembers);
        idArray.push(answers.internId);
        createTeam();
    });
}
// Get the data together into a Team object and passes it to a method that builds an html file from it.

function buildTeam() {
    //Generate a directory for the end result
    
    fs.mkdirSync(OUTPUT_DIR)
    fs.writeFileSync(outputPath, makePage(teamMembers), "utf-8");
}

createManager();


}
options();
