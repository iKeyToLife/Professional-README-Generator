# Professional-README-Generator

## Table of Contents
- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Repository Link](#repository-link)
- [Video Application](#video-application)

## Description
Creating a high-quality README is crucial for any open-source project on GitHub. A well-structured README file helps users understand what the app is for, how to use it, how to install it, report issues, and contribute to the project. A detailed README increases the likelihood that other developers will contribute to the success of the project.

This command-line application simplifies the process by dynamically generating a professional README.md file based on user input. By using the Inquirer package, the application collects the necessary information and creates a comprehensive README file, allowing project creators to focus more on development.

## User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Installation

To install the application, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
2. Navigate to the project directory:
   ```bash
   cd <project-directory>
3. Install the dependencies:
   ```bash
   npm install

## Usage

To generate a README file, run the following command:

```bash
node index.js
```
Follow the prompts provided by the Inquirer package to input the necessary information. Once all the prompts are completed, the application will generate a professional README.md file in the project directory.

## Features

- Dynamic generation of README.md files based on user input
- Prompts for essential sections such as description, installation, usage, contributing, tests, and license
- Easy-to-use command-line interface

## Repository Link
[Professional README Generator Repository](https://github.com/iKeyToLife/Professional-README-Generator/)

## Video Application
[Professional README Generator video]()