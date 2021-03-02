const Employee = require("./Employee")

class Engineer{
    constructor(githubUserName){
        this.githubUserName - githubUserName;
    }
    getGitHub() {
        return this.githubUserName;
    }
    getRole() {
        return "Engineer";
    }
}