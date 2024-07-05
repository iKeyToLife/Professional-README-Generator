// TODO: Include packages needed for this application
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        message: 'What is the name of your project?',
        name: 'title'
    },
    {
        message: 'Please provide a brief description of your project:',
        name: 'description'
    },
    {
        message: 'What are the installation instructions?',
        name: 'installation'
    },
    {
        message: 'How do you use your application?',
        name: 'usage'
    },
    {
        message: 'What are the contribution guidelines?',
        name: 'contributing'
    },
    {
        message: 'What are the test instructions?',
        name: 'tests'
    },
    {
        message: 'Choose a license for your project:',
        name: 'license',
        type: 'list',
        choices: ['MIT', 'GPLv3', 'Apache-2.0', 'None']
    },
    {
        message: 'What is your GitHub username?',
        name: 'githubUsername'
    },
    {
        message: 'What is your email address?',
        name: 'email'
    },
    {
        message: `What is your Lindkendin? (send only your personal URL)\nExample: ivan-ivanov\n Press here:`,
        name: `linkendin`
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('README created');
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile(`yourREADME.md`, generateMarkdown(data));
    })
}

// Function call to initialize app
init();