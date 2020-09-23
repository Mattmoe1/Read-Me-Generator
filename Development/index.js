var inquirer = require("inquirer");
var fs = require("fs");
var path = require("path");
var generateMarkdown = require("./utils/generateMarkdown");

// questions for the user
const questions = [
    {
    type: "input",
    name: "Title",
    message: "What is project name?",
    },
    {
    type: "input",
    name: "Description",
    message: "Describe your project.",
    },
    {
    type: "input",
    name: "Installation",
    message: "What are the necessary steps for the install?",
    }, 
    {
    type: "input",
    name: "Usage",
    message: "What is the usage info?",
    },
    {
    type: "input",
    name: "License",
    message: "What are the license that the project should have?",
    },
    {
    type: "input",
    name: "Test",
    message: "What are the instructions?",
    },
    {
    type: "input",
    name: "Contributing",
    message: "What is the contribution or what is needed for the repo?",
    }, 
    {
    type: "input",
    name: "Questions",
    message: "If you need help this is how to contact me.",
    },
];

// Readme file
function writeToFile(fileName, data) {
    console.log(data)
    return fs.writeFileSync(path.join(process.cwd(),fileName),data);
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then(function(response) {

        writeToFile("Readme.md", generateMarkdown(response));
    });
}

// initialize program
init();
