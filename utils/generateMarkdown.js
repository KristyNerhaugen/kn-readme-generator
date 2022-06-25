// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ### ${data.description}
  
  ## Table of Contents 

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
  ### Reach out through GitHub or email. GitHub is here: github.com/${data.github}. For additional questions, email ${data.email}. 
`;
}

module.exports = generateMarkdown;
