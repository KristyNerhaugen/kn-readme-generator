// Packages needed for this application
// require fs and require inquirer since inquirer is installed 
const inquirer = require('inquirer');
const fs = require('fs');
// require generateMarkdown to connect to generateMarkdown.js
const generateMarkdown = require('./utils/generateMarkdown');
const { generate } = require('rxjs');

// Array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      // user name
      type: 'input',
      name: 'name',
      message: 'What is your name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name.');
          return false;
        }
      }
    },
    {
      // GitHub username 
      type: 'input',
      name: 'github',
      message: 'What is your GitHub Username? (Required)',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter your GitHub username.');
          return false;
        }
      }
    },
    {
      // email address
      type: 'input',
      name: 'email',
      message: 'What is your email address? (Required)',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter your email address.');
          return false;
        }
      }
    },
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
      message: 'What is the description for your project? Explain the what, why, and how of your project. (Required)',
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
    // credits information--required
    {
      type: 'input',
      name: 'credits',
      message: 'Provide some information about collaborators, third-party assets, and/or tutorials for the "Credits" section. (Required)',
      validate: creditsInput => {
        if (creditsInput) {
          return true;
        } else {
          console.log('Please enter credits information.');
          return false;
        }
      }
    },
    {
      // license information-required 
      type: 'checkbox',
      name: 'license',
      message: 'Which license do you want to include? Please select only one. ',
      choices: ['MIT', 'GNU GPLv3', 'none']
    },
    {
      // contributing information-required 
      type: 'input',
      name: 'contributing',
      message: 'What are the contribution guidelines for your project?(Required)',
      validate: contributingInput => {
        if (contributingInput) {
          return true;
        } else {
          console.log('Please enter contribution guidelines.');
          return false;
        }
      }
    },
    {
      // tests instructions-required 
      type: 'input',
      name: 'tests',
      message: 'Provide examples for how to run tests on your application. (Required)',
      validate: testsInput => {
        if (testsInput) {
          return true;
        } else {
          console.log('Please enter information about running tests.');
          return false;
        }
      }
    },
  ])
  // Function to write README file--figure out how to connect this function to generateMarkdown
    .then(data => {
      const filename = `./dist/${data.title
        .split(' ')
        .join('')}.md`;
      fs.writeFile(filename, generateMarkdown(data), err =>
        err ? console.log(err) : console.log('Success! README created!')
      );
    });
};

// Function to initialize app
function init() {
  questions();
 }

// Function call to initialize app
init();
