// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'none') {
    return '';
    } else if (license === 'MIT') {
      return `![MIT badge](https://img.shields.io/badge/License-MIT-yellow.svg)`
    } else if (license === 'GNU GPLv3') {
      return `![GNU GPLv3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }
// if (license === 'none') {
//return ''; 
// if (license === 'MIT') {
//return 'link here for MIT link'
//if else (license === 'GNU GPLv3') {
// return 'link here for GNU GPLv3'
// }
// }
//}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

  ## Description
  ### ${data.description}
  
  ## Table of Contents 
  ### 1. [Installation](#Installation)
  ### 2. [Usage](#Usage)
  ### 3. [Credits](#Credits)
  ### 4. [License](#License)
  ### 5. [Contributing](#Contributing)
  ### 6. [Tests](#Tests)
  ### 7. [Questions](#Questions)

  ## Installation
  ### ${data.installation}

  ## Usage
  ### ${data.usage}

  ## Credits
  ### ${data.credits}

  ## License
  ### ${data.license}

  ## Contributing
  ### ${data.contributing}

  ## Tests
  ### ${data.tests}

  ## Questions 
  ### Reach out through GitHub or email with any questions. [Click here to go to GitHub page](https://github.com/${data.github}). For additional questions, contact through email. [Click here to email](mailto:${data.email}). 
`;
}

module.exports = generateMarkdown;
