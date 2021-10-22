//link to HTML generation
const createHTML = require('./src/createHTML');

// Team member profile links
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//NODE FS and Inquirer
const fs = require('fs');

const inquirer = require('inquirer');

//empty arry of Team
const arrayTEAM = [];

//prompts for Manager
const newManager = () => {
    console.log('Add Manager Information.')
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the name of the Manager.',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter a number to be assigned as the ID.',
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the email address of the Manager.",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter the office number of the Manager.',
        },
    ])
    .then(mgrData => {
        const {name, id, email, officeNumber} = mgrData;
        const mgr = new Manager (name, id, email, officeNumber);

        arrayTEAM.push(mgr);
        console.log(mgr);
    })
};

//prompts for adding a new employee

const newEmployee = () => {
    console.log('Add employee Information.')
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose the role of your employee.",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the name of your employee.',            
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter a number to be assigned as your Employees ID.'
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email address."
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter your employee's github username.",
            when: (input) => input.role === "Engineer",
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter your intern's school name.",
            when: (input) => input.role === "Intern",
        },
        {
            type: 'confirm',
            name: 'addNewEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(empData => {

        let {name, id, email, role, github, school, addNewEmployee } = empData;
        let emp;

        if (role === "Engineer") {
            emp = new Engineer (name, id, email, github);
            console.log(emp);
        } else if (role === "Intern") {
            emp = new Intern (name, id, email, school);
            console.log(emp);
        }

        arrayTEAM.push(emp);

        if (addNewEmployee) {
            return newEmployee(arrayTEAM);
        } else {
            return arrayTEAM;
        }
    })
};

//generate HTML page using FS
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if(err) {
            console.log(err);
            return;
        } else {
            console.log("Your profile has been created!")
        }
    })
};

newManager()
    .then(newEmployee)
    .then(arrayTEAM => {
        return createHTML(arrayTEAM);
    })
    .then(writeHTML => {
        return writeFile(writeHTML);
    })
    .catch(err => {
        console.log(err);
    });