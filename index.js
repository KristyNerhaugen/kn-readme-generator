// TODO: Include packages needed for this application
// require fs and require inquirer since inquirer is installed 
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            // project name--required 
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your project name.');
                    return false;
                }
            }
        },
        {
            // project description--required 
            type: 'input',
            name: 'description',
            message: 'What is the description of your project? Explain the what, why, and how of your project. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter your project description.');
                    return false;
                }
            }
        },
        {
            // project installation-required 
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project? (Required)',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please enter installation steps.');
                    return false;
                }
            }
        },
        {
            // project usage-required 
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions and examples for use for the "Usage" section. (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter usage information.');
                    return false;
                }
            }
        },
            // credits information--optional 
        {
            type: 'confirm',
            name: 'confirmCredits',
            message: 'Would you like to enter some information for the "Credits" section?',
            default: true
          },
          {
            type: 'input',
            name: 'credits',
            message: 'Provide some information about collaborators, third-party assets, and/or turtorials for the "Credits" section.',
            when: ({ confirmCredits }) => confirmCredits
          },
        {
           // license information-required 
            type: 'checkbox',
            name: 'license',
            message: 'Which license do you want to include? Please select only one. ',
            choices: ['MIT', 'GNU GPLv3', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
          },
          // contribution guidelines information
          // tests instruction
          // questions information 
    ]);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
