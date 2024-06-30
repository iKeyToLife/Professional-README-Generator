// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license || license === 'None') {
    return '';
  } else if (`Apache-2.0`) {
    license = `Apache_2.0`
  }
  return `\n![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)\n`;
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
  return `\n## License
This project is licensed under the [${license}](${renderLicenseLink(license)}) License.\n`;
}

function renderGitHubLink(githubUsername) {
  const userName = githubUsername.trim();
  if (!userName || userName === '') {
    return '';
  } else {
    return `\n- [<img src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Github-Dark.svg" alt="GitHub Icon" width="30">](https://github.com/${userName})`
  }
}

function renderEmail(email) {
  const userMail = email.trim();
  if (!userMail || userMail === '') {
    return '';
  } else {
    return `\n- [<img src="https://img.shields.io/badge/Mail-2CA5E0?style=for-the-badge&logoColor=white" alt="Mail Icon" width="45">](mailto:${userMail}) [${userMail}](mailto:${userMail})`
  }
}

function renderLinkendin(linkendin) {
  const linkendinUser = linkendin.trim();
  if (!linkendinUser || linkendinUser === '') {
    return '';
  } else {
    return `\n- [<img src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/LinkedIn.svg" alt="GitHub Icon" width="30">](https://www.linkedin.com/in/${linkendinUser})`
  }
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
${renderGitHubLink(data.githubUsername)}${renderLinkendin(data.linkendin)}${renderEmail(data.email)}
`;
}

module.exports = generateMarkdown;
