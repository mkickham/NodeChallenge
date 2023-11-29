// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "type the name of your project here:",
    },
    {
        type: "input",
        name: "description",
        message: "type a description about what this README will do:",
    },
    {
        type: "input",
        name: "table",
        message: "create a table of contents here:",
    },
    {
        type: "input",
        name: "credit",
        message: "give credit to any collaborators here:",
    },
    {
        type: "list",
        choices: ['MIT', 'none'],
        name: "license",
        message: "type what license you are using here:"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(path.join(process.cwd(), fileName), data, function (err){
        if(err) throw err;
        console.log("Create ReadMe");
    });
};

// Function call to initialize app
function init(){
    inquirer.prompt(questions).then(response => {
        writeToFile("./develop/README.md", generateMarkdown(response));
    });
}

init();
