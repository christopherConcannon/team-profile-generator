// 3RD PARTY MODULES
const inquirer = require('inquirer');

// CUSTOM MODULES
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site.js');

// ARRAY OF OUTPUT OBJECTS TO SEND TO PAGE-TEMPLATE
const employeeDataArr = [];

// email and number regex for inquirer validation
const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const numRegEx = /^[1-9]*\d$/;

// ask for manager info
const promptManager = () => {
	inquirer
		.prompt([
			{
				type     : 'input',
				name     : 'name',
				message  : "Please enter the team manager's name (Required ad nauseum)",
				validate : (nameInput) => {
					if (nameInput) {
						return true;
					} else {
						console.log('\nThe name, please');
						return false;
					}
				}
			},
			{
				type     : 'input',
				name     : 'id',
				message  : "Please enter the team manager's ID number",
				validate : (idInput) => {
					if (idInput.match(numRegEx)) {
						return true;
					} else {
						console.log('\nPlease enter a NUMBER');
						return false;
					}
				}
			},
			{
				type     : 'input',
				name     : 'email',
				message  : "Please enter the team manager's email address",
				validate : (emailInput) => {
					if (emailInput.match(emailRegEx)) {
						return true;
					} else {
						console.log('\nPlease enter a valid email!');
						return false;
					}
				}
			},
			{
				type     : 'input',
				name     : 'officeNo',
				message  : "Please enter the team manager's office number",
				validate : (officeInput) => {
					if (officeInput.match(numRegEx)) {
						return true;
					} else {
						console.log('\nPlease enter a NUMBER');
						return false;
					}
				}
			}
		])
		.then((data) => {
			const { name, id, email, officeNo } = data;
			// instantiate object instance from data
			const manager = new Manager(name, id, email, officeNo);
			// create output object (of template-strings returned by object methods)
			const managerOutput = {
				role     : manager.getRole(),
				name     : manager.getName(),
				id       : manager.getId(),
				email    : manager.getEmail(),
				wildcard : manager.getOfficeNumber()
			};
			// store output object in global array.
			employeeDataArr.push(managerOutput);
			// return to menu
			promptMenu();
		});
};

// provide user options after each employee addition
const promptMenu = () => {
	inquirer
		.prompt([
			{
				type    : 'list',
				name    : 'menuChoice',
				message :
					"Please enter the next team member's position or finish building your team",
				choices : [ 'Engineer', 'Intern', 'Finish' ]
			}
		])
		// conditionally call engineer prompt/ intern prompt/ or finish module)
		.then((data) => {
			if (data.menuChoice === 'Engineer') {
				promptEngineer();
			} else if (data.menuChoice === 'Intern') {
				promptIntern();
			} else {
				// pass global array of employee output objects to page-template for processing and store in const
				const pageHTML = generatePage(employeeDataArr);
				// pass returned HTML to fs module to generate .html and .css files
				return writeFile(pageHTML)
					.then((writeFileResponse) => {
						console.log(writeFileResponse);
						return copyFile();
					})
					.then((copyFileResponse) => {
						console.log(copyFileResponse);
					})
					.catch((err) => {
						console.log(err);
					});
			}
		});
};
// add engineer profile
const promptEngineer = () => {
	inquirer
		.prompt([
			{
				type     : 'input',
				name     : 'name',
				message  : "Please enter the team engineer's name",
				validate : (nameInput) => {
					if (nameInput) {
						return true;
					} else {
						console.log("\nWe'll need the name, thank you...");
						return false;
					}
				}
			},
			{
				type     : 'input',
				name     : 'id',
				message  : "Please enter the team engineer's ID number",
				validate : (idInput) => {
					if (idInput.match(numRegEx)) {
						return true;
					} else {
						console.log('\nPlease enter a NUMBER');
						return false;
					}
				}
			},
			{
				type     : 'input',
				name     : 'email',
				message  : "Please enter the team engineer's email address",
				validate : (emailInput) => {
					if (emailInput.match(emailRegEx)) {
						return true;
					} else {
						console.log('\nPlease enter a valid email!');
						return false;
					}
				}
			},
			{
				type     : 'input',
				name     : 'github',
				message  : "Please enter the team engineer's Github username",
				validate : (githubInput) => {
					if (githubInput) {
						return true;
					} else {
						console.log('\nGive us the name!');
						return false;
					}
				}
			}
		])
		// as above, instantiate object instance, derive output object, push to array, and call menu prompt
		.then((data) => {
			const { name, id, email, github } = data;
			const engineer = new Engineer(name, id, email, github);
			const engineerOutput = {
				role     : engineer.getRole(),
				name     : engineer.getName(),
				id       : engineer.getId(),
				email    : engineer.getEmail(),
				wildcard : engineer.getGithub()
			};
			employeeDataArr.push(engineerOutput);
			promptMenu();
		});
};
// add intern profile
const promptIntern = () => {
	inquirer
		.prompt([
			{
				type     : 'input',
				name     : 'name',
				message  : "Please enter the team intern's name",
				validate : (nameInput) => {
					if (nameInput) {
						return true;
					} else {
						console.log('\nOnce again, with feeling...');
						return false;
					}
				}
			},
			{
				type     : 'input',
				name     : 'id',
				message  : "Please enter the team intern's ID number",
				validate : (idInput) => {
					if (idInput.match(numRegEx)) {
						return true;
					} else {
						console.log('\nPlease enter a NUMBER');
						return false;
					}
				}
			},
			{
				type     : 'input',
				name     : 'email',
				message  : "Please enter the team intern's email address",
				validate : (emailInput) => {
					if (emailInput.match(emailRegEx)) {
						return true;
					} else {
						console.log('\nPlease enter a valid email!');
						return false;
					}
				}
			},
			{
				type     : 'input',
				name     : 'school',
				message  : "Please enter the team intern's school",
				validate : (schoolInput) => {
					if (schoolInput) {
						return true;
					} else {
						console.log('\nThe name of the academic institution or program');
						return false;
					}
				}
			}
		])
		// as above, instantiate object instance, derive output object, push to array, and call menu prompt
		.then((data) => {
			const { name, id, email, school } = data;
			const intern = new Intern(name, id, email, school);
			const internOutput = {
				role     : intern.getRole(),
				name     : intern.getName(),
				id       : intern.getId(),
				email    : intern.getEmail(),
				wildcard : intern.getSchool()
			};
			employeeDataArr.push(internOutput);
			promptMenu();
		});
};

// initialize app
console.log(
	'Good day.  At the prompt, please enter the requested details to begin building your team.'
);
promptManager();
