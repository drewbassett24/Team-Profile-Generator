const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(_dirname, "output")
const outputpath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const teamMember = [];
const idArtray = [];

function options() {

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
                    name: "managerOfficeNumber",
                    message: "What is the team manager's Office Number?",
                }
            ]).then(answers => {
                const manager = new Manager(answers.managerName, answers.Id, answers.Email, answers.officeNumber);
                teamMembers.push(manager);
                console.log(teamMembers);
                idArtray.push(answers.managerId);
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
                    "intern",
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
                default:
                    buildTeam();
            }
        })
    }

        
}