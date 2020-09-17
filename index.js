const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
    {
    type: "input",
    name: "What is project name?",
    message: "Title",
    },
    {
    type: "input",
    name: "Describe your project.",
    message: "Description",
    },
    {
    type: "input",
    name: "What are the necessary steps for the install.",
    message: "Installation",
    }, 
    {
    type: "input",
    name: "What is the usage info?",
    message: "Usage",
    },
    {
    type: "input",
    name: "What are the license that the project should have?",
    message: "License",
    },
    {
    type: "input",
    name: "What are the instructions?",
    message: "Test",
    },
    {
    type: "input",
    name: "What is the contribution or what is needed for the repo?",
    message: "Contributing",
    }, 
    {
    type: "input",
    name: "If you need help this is how to contact me.",
    message: "Questions",
    },
];

// function to write README file
function writeToFile(fileName, data) {
    console.log(data)
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
