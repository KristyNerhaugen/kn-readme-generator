// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license);
  if (license === 'none'|| license === undefined) {
    return '';
  } else if (license === 'MIT') {
    return `![MIT badge](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (license === 'GNU GPLv3') {
    return `![GNU GPLv3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string --creating table of contents link 
function renderLicenseLink(license) { 
  if (license === 'none' || license === undefined) {
  return '';
  } else return `\n  ### [License](#License)`;
}
// if (license === 'none') {
//   return '';
// } if (license === 'MIT') {
//   return `Copyright YEAR ${name} 
//   Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
//    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. 
//    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
// } else if (license === 'GNU GPLv3') {
//     return `placeholder for GNU GPLv3 license information`
//   }
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string --return License section header 
function renderLicenseSection(license) { 
  if (license === 'none' || license === undefined) {
    return '';
    } else return `\n  ## License \n`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license[0])}

  ## Description
  ### ${data.description}
  
  ## Table of Contents 
  ### [Installation](#Installation)
  ### [Usage](#Usage)
  ### [Credits](#Credits) ${renderLicenseLink(data.license[0])}
  ### [Contributing](#Contributing)
  ### [Tests](#Tests)
  ### [Questions](#Questions)

  ## Installation
  ### ${data.installation}

  ## Usage
  ### ${data.usage}

  ## Credits
  ### ${data.credits}
  ${renderLicenseSection(data.license[0])}
  ## Contributing
  ### ${data.contributing}

  ## Tests
  ### ${data.tests}

  ## Questions 
  ### Reach out through GitHub or email with any questions. [Click here to go to GitHub page](https://github.com/${data.github}). For additional questions, contact through email. [Click here to email](mailto:${data.email}). 
`;
}

module.exports = generateMarkdown;
