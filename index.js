//dependencies
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
//classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


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
                name: "engineersGitHub",
                message: "What is the engineer's Github username?",
            }
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamMembers.push(engineer);
            idArtray.push(answers.engineerId);
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
            }
            {
                type: "input",
                name: "internschool",
                message: "What is the intern's school?",
            }
        ]).then(answers => {
            const intern = new Engineer(answers.internName, answers.internId, answers.internEmail, answers.internGithub);
            teamMembers.push(intern);
            idArtray.push(answers.internId);
            createTeam();
        });
    }
        
function buildTeam() {
    if (fs.existsSync(WHAT GOES HERE???)) {
        fs.mkdirSync(WHAT GOES HERE???)
    }
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
}

createManager();

}

appMenu();