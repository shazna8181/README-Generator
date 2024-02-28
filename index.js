const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
// const questions = [

// ];
inquirer
  .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is your title of your project?',
      },

      {
        type: 'input',
        name: 'description',
        message: 'Please decribe about your project?',
      },

      {
        type: 'input',
        name: 'installation',
        message: 'Please explain how to setup your application or installation steps briefly?',
      },

      {
        type: 'input',
        name: 'usage',
        message: 'How to use your application?',
      },

      {
        type: 'list',
        name: 'license',
        message: 'Choose your license?',
        choices:['Apache License 2.0',
                 'GNU',
                 'MIT',
                 'Mozilla',
                 'None'],
      },

      {
        type: 'input',
        name: 'contribution',
        message: 'Enter your contribution guidelines?',
      },

      {
        type: 'input',
        name: 'tests',
        message: 'Provide test instructions?',
      },

      {
        type: 'input',
        name: 'github',
        message: 'Enter your Github username?',
      },

      {
        type: 'input',
        name: 'email',
        message: 'Enter your email?',
      },

  ])
  .then((data) => {
    //console.log(data);
    fs.writeFile('README.md', generateMarkdown(data), (err) =>
  err ? console.error(err) : console.log('Success!')
  );

  })

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
