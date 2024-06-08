const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Include packages needed for this application
const generateReadme = (answers) => `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For any questions, please contact me with the information below:

GitHub: [${answers.github}](https://github.com/${answers.github})  
Email: [${answers.email}](mailto:${answers.email})
`;

// TODO: Create an array of questions for user input
const questions = [];

inquirer
    .prompt([

        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write the description of your project',
        },

        {
            type: 'list',
            name: 'tableOfContents',
            message: 'Table of contents',
            choices: ['installation', 'choices','usage','licence','contributing','tests','questions']
        },

        {
            type: 'input',
            name: 'installation',
            message: 'Write the installation process?',
        },

        {
            type: 'input',
            name: 'usage',
            message: 'Why are you using this project?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for your project?',
            choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'What is this contributing to?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide test instructions',
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Add your questions here',
        },

        // WHEN I enter my GitHub username
        // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
        {
            type: 'input',
            name: 'github',
            message: 'Write your github username',
        },
        {
            type: 'input',
            name: 'linkedin',
            message: 'Provide your profile`s LinkedIn link',
        },
    ])
    .then((answers) => {
        console.log(answers)
        const htmlPageContent = generateMarkdown(answers); //making string based on answers 

        fs.writeFile('READMETEST.md', htmlPageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md!')
        );
    });

