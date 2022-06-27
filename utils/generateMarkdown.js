// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ### ${data.description}
  
  ## Table of Contents 
  ### 1. [Installation](#Installation)
  ### 2. [Usage](#Usage)
  ### 3. [Credits](#Credits)
  ### 4. [License](#License)
  ### 5. [Contributing](#Contributing)
  ### 6. [Tests](#Tests)
  ### 7. [Contact Information](#Contact-Information)

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

  ## Contact Information 
  ### Questions? Reach out through GitHub or email. [Click here to go to GitHub page](https://github.com/${data.github}). For additional questions, contact through email. [Click here to email](mailto:${data.email}). 
`;
}

module.exports = generateMarkdown;
