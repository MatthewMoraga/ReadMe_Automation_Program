// TODO: Include packages needed for this application

// importing packages that i need to use
// no need to import jQuery since it is static when it is installed

const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js")

// gives the user a list of licenses to choose from
const lincenses = ["MIT"]

// TODO: Create an array of questions for user input

// creating an inquirer prompt with an array of questions for user input

inquirer.prompt ([
// asks the user for a filename that becomes the name of the file after input
    {
        name: "fileName",
        type: "input",
        message: "enter a file name"
    },
// adds a title name 
    {
        name: "title",
        type: "input",
        message: "enter a title",
    },
// 
    {
        name: "license",
        type: "list",
        message: "choose a license type",
        choices: lincenses,
            
    },
// the rest are pretty self explanitory
    {
        name: "description",
        type: "input",
        message: "enter description",
    },
    {
        name: "installation",
        type: "input",
        message: "enter installation instructions",
    },
    {
        name: "usage",
        type: "input",
        message: "enter usage information",
    },
    {
        name: "contributions",
        type: "input",
        message: "enter contribution guidelines",
    },
    {
        name: "testing",
        type: "input",
        message: "enter test instructions",
    },
    {
        name: "gitHub",
        type: "input",
        message: "enter GitHub link"
    },
    {
        name: "linkedIn",
        type: "input",
        message: "enter LinkedIn link"
    },
    {
        name: "email",
        type: "input",
        message: "enter email address"
    }
// using .then method to desconstruct to set individual variables 
// so that they can be called in the template literal below
// which is being used to format and what is written when the README when it is generated
]).then(({
    fileName,
    title,
    license,
    licenseLink = "https://www.mit.edu/~amini/LICENSE.md",
    badge = "![GitHub](https://img.shields.io/github/license/MatthewMoraga/README_Generator)",
    description,
    installation,
    usage,
    contributions,
    testing,
    gitHub,
    linkedIn,
    email,
}) => {
// arrow function to set the promised object from the .then method above
// markdownTemplate is the template literal which gets written when fs.writeFile is called
// the table of contents section has a hyperlink to the different sections
// the objects being selected are the promised objects that when the README file is written
// it takes what the user inputs and prints the input to where the selector is 


const markdownTemplate = `

# ${title}
# License: ${license} ${badge} ${licenseLink} 

## Table of Contents
* [Installation](#installation)
* [Description](#description)
* [Usage](#usage)
* [Contributions](#contributions)
* [Testing](#testing)
* [Contact](#contact)

## Installation
${installation}
## Description
${description}
## Usage
${usage}
## Contributions
${contributions}
## Testing
${testing}

# Contact
* GitHub: ${gitHub}
* LinkedIn: ${linkedIn}
* E-mail Address: ${email}
`


// calling back the function below from the writeToFile() function
// and passing in the fileName variable from the deconstruct to apply the fileName
// from the fileName user input
// and passing the markdownTemplate const as the data to be written
// from it's template literal being passed as data
writeToFile(fileName, markdownTemplate)



})


// TODO: Create a function to write README file

// function that writes the README file with FileName and markdownTemplate being passed
function writeToFile(fileName, data) {
// writing the file with fs.
// The fileName will become whatever the user inputs as the fileName in the prompt
// and markdownTemplate template literal is being passed through as data so that is what is being
// written when writeFile is being called with the usual error check arrow function
    fs.writeFile(`./${fileName}.md`, data, (err) => {
        if (err) return console.log(err);
    })
}


// TODO: Create a function to initialize app
function init() {

}


// Function call to initialize app
init();
