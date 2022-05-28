const inquirer = require('inquirer');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const render = require('./page-template');
const writeFile = require('./generate-site');

class ProfileGenerator {
    constructor() {
        this.employees = [];
        this.employeeCount = 0;
        this.employeeId = 1;
    }

    validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    addEmployee() {
        const questions = [
            {
                type: 'list',
                name: 'employeeType',
                message: 'What type of employee would you like to add?',
                choices: ['Engineer', 'Intern', 'Manager', 'No more employees']
            }
        ];

        inquirer.prompt(questions).then(answers => {
            switch (answers.employeeType) {
                case 'Engineer':
                    this.addEngineer();
                    break;
                case 'Intern':
                    this.addIntern();
                    break;
                case 'Manager':
                    this.addManager();
                    break;
                case 'No more employees':
                    if(this.employeeCount === 0) {
                        console.log('You must add at least one employee');
                        this.addEmployee();
                    }
                    console.log('\n\n---- Generating HTML... ----');
                    writeFile(this.generateHTML())
                        .then(result => {
                            console.log(result.message)});
                    break;
            }
        });
    }

    addEngineer() {
        const questions = [
            {
                type: 'input',
                name: 'name',
                message: 'What is the engineer\'s name?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter a name');
                        return false ;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the engineer\'s email?',
                validate: emailInput => {
                    if (emailInput) {
                        if(this.validateEmail(emailInput)) {
                            return true;
                        } else {
                            console.log('\nPlease enter a valid email');
                            return false ;
                        }
                    } else {
                        console.log('Please enter an email');
                        return false ;
                    }
                }
                
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is the engineer\'s GitHub username?',
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log('Please enter a GitHub username');
                        return false ;
                    }
                }
            }
        ];

        inquirer.prompt(questions).then(answers => {
            const engineer = new Engineer(answers.name, answers.email, this.employeeId, answers.github);
            this.employees.push(engineer);
            this.employeeCount++;
            this.employeeId++;
            this.addEmployee();
        });
    }

    addIntern() {
        const questions = [
            {
                type: 'input',
                name: 'name',
                message: 'What is the intern\'s name?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter a name');
                        return false ;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the intern\'s email?',
                validate: emailInput => {
                    if (emailInput) {
                        if(this.validateEmail(emailInput)) {
                            return true;
                        } else {
                            console.log('\nPlease enter a valid email');
                            return false ;
                        }
                    } else {
                        console.log('Please enter an email');
                        return false ;
                    }
                }

            },
            {
                type: 'input',
                name: 'school',
                message: 'What school does the intern attend?',
                validate: schoolInput => {
                    if (schoolInput) {
                        return true;
                    } else {
                        console.log('Please enter a school');
                        return false ;
                    }
                }
            }
        ];

        inquirer.prompt(questions).then(answers => {
            const intern = new Intern(answers.name, answers.email, this.employeeId, answers.school);
            this.employees.push(intern);
            this.employeeCount++;
            this.employeeId++;
            this.addEmployee();
        });
    }

    addManager() {
        const questions = [
            {
                type: 'input',
                name: 'name',
                message: 'What is the manager\'s name?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter a name');
                        return false ;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the manager\'s email?',
                validate: emailInput => {
                    if (emailInput) {
                        if(this.validateEmail(emailInput)) {
                            return true;
                        } else {
                            console.log('\nPlease enter a valid email');
                            return false ;
                        }
                    } else {
                        console.log('Please enter an email');
                        return false ;
                    }
                }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is the manager\'s office number?',
                validate: officeNumberInput => {
                    if (officeNumberInput) {
                        return true;
                    } else {
                        console.log('Please enter an office number');
                        return false ;
                    }
                }

            }
        ];

        inquirer.prompt(questions).then(answers => {
            const manager = new Manager(answers.name, answers.email, this.employeeId, answers.officeNumber);
            this.employees.push(manager);
            this.employeeCount++;
            this.employeeId++;
            this.addEmployee();
        });
    }

    generateHTML() {
        return render(this.employees);
    }

}

module.exports = ProfileGenerator;
