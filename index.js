const inquirer = require('inquirer');
const fs = require('fs');

const htmlCreate = require('./src/page-template');

const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');


let employeeArray = [];

// Engineer prompts
const addEngineer = () => {
    console.log('Now adding an engineer:');
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is their name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is their id number?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is their GitHub username?'
        },
        {
            type: 'list',
            name: 'newEmployee',
            message: 'Would you like to enter a new employee or finish?',
            choices: ['Engineer', 'Intern', 'Finish']
        }
    ])
    .then(userInput => {
        const { name, id, github } = userInput;
        const engineer = new Engineer(name, id, github);
        employeeArray.push(engineer);

        if (userInput.newEmployee === "Engineer") {
            return addEngineer();
        } else if (userInput.newEmployee === "Intern") {
            return addIntern();
        } else {
            return employeeArray;
        }
    })
};

// Intern prompts
const addIntern = () => {
    console.log('Now adding an intern: ');

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is their name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is their id number?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the name of their school?'
        },
        {
            type: 'list',
            name: 'newEmployee',
            message: 'Would you like to enter a new employee or finish?',
            choices: ['Engineer', 'Intern', 'Finish']
        }
    ])
    .then(userInput => {
        const { name, id, school } = userInput;
        const intern = new Intern(name, id, school);
        employeeArray.push(intern);

        if (userInput.newEmployee === "Engineer") {
            return addEngineer();
        } else if (userInput.newEmployee === "Intern") {
            return addIntern();
        } else {
            return employeeArray;
        }
    })
};

// Manager prompts
const getManagerInfo = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the manager's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is their id number?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is their office number?'
        },
        {
            type: 'list',
            name: 'newEmployee',
            message: 'What type of employee would you like to add next?',
            choices: ['Engineer', 'Intern']
        }
    ])
    .then(userInput => {
        const { name, id, officeNumber } = userInput;
        const manager = new Manager(name, id, officeNumber);
        employeeArray.push(manager);

        if (userInput.newEmployee === "Engineer") {
            return addEngineer();
        } else if (userInput.newEmployee === "Intern") {
            return addIntern();
        }
    })
}



const init = () => {
    console.log('Hello! Get ready to build your team, please answer the following prompts!');
    getManagerInfo()
        .then(data => {
            const pageHTML = htmlCreate(data);
            fs.writeFile('./dist/index.html', pageHTML, (err) => {
                if (err) {
                    throw err;
                } 
                console.log('The file has been created');
                
            })
        })

}



init();