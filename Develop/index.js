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
        type: "checkbox",
        choices: ['MIT', 'Other'],
        name: "license",
        message: "type what license you are using here:"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeToFile(path.join(process.cwd(), fileName), data);
};

// Function call to initialize app
function init(){
    inquirer.prompt(questions).then(response => {
        console.log("Create ReadMe");
        writeToFile("./develop/README.md", generateMarkdown(response));
    });
}

init();
