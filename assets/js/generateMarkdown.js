// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license || license === 'None') {
    return '';
  }
  return `![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license || license === 'None') {
    return '';
  }
  switch (license) {
    case 'MIT':
      return 'https://choosealicense.com/licenses/mit/';
    case 'GPLv3':
      return 'https://choosealicense.com/licenses/gpl-3.0/';
    case 'Apache-2.0':
      return 'https://choosealicense.com/licenses/apache-2.0/';
    default:
      return '';
  }
}

function renderLicenseContent(license) {
  if (!license || license === 'None') {
    return '';
  } else {
    return `\n- [License](#license)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === 'None') {
    return '';
  }
  return `## License
This project is licensed under the [${license}](${renderLicenseLink(license)}) License.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)${renderLicenseContent(data.license)}
- [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

${renderLicenseSection(data.license)}

## Questions
If you have any questions about the project, feel free to contact me:

- GitHub: [${data.githubUsername}](https://github.com/${data.githubUsername})
- Email: [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
