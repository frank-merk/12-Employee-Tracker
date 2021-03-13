// inquirer  for questions, prompts has the pre-written intro options, connection starts/stops the app.
const inquirer = require("inquirer");
const prompts = require('./inquirerPrompts');
const connection = require('../connection');

// switch case to filter user for what they want to do
function begin() {
    inquirer.prompt(prompts).then((response) =>{
        var answer = response.home
        switch (answer) {
            case "Add a Department":
                addDepartment();
                break;
            case "Add a Role":
                addRole();
                break;
            case "Add an Employee":
                addEmployee() ;
                break;
            case "View Departments":
                viewDepartment();
                break;
            case "View Roles":
                viewRoles();
                break;
            case "View Employees":
                viewEmployees();
                break;
            case "Update an Employee Role":
                updateEmployeeRole();
                break;
            default:
                console.log("Good bye!");
                connection.end();
        }
    })
}

function addDepartment(){

   
}


function addDepartment(){

}

function addRole(){

}

function addEmployee() {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'firstName',
                message: "Enter the employee's first name.",

            },

            {
                type: 'input',
                name: 'lastName',
                message: "Enter the employee's last name.",

            },

            {
                type: 'list',
                name: 'role',
                message: "What is the employees role?",
                choices: ['Lead Actor', 'Lead Actress', 'Lead Hair and Makeup', 'Junior VFX Designer', 'Best Boy', 'Accountant', 'Legal Analyst']

            },

            {
                type: 'list',
                name: 'boss',
                message: "Who is the employee's manager?",
                choices: ['Joel Coen', 'Jon Moore', 'Dan Theman', 'none']

            },

        ]).then(function (response) {

            //change role.response to role id
            let role = response.role;
            switch(role){
            case "Lead Actor":
                role = 6;
                break;
            case "Lead Actress":
                role = 7;
                break;
            case "Lead Hair and Makeup":
                role = 2;
                break;
            case "Junior VFX Designer":
                role = 3;
                break;
            case "Best Boy":
                role = 5;
                break;
            case "Accountant":
                role = 11;
                break;
            case "Legal Analyst":
                role = 10;
                break;
            default:
                console.log("Good bye!");
            }

            let manager = response.boss
            if (manager == 'none') {
                manager = null;
                
            } else if (manager == 'Joel Coen') {
                manager = 1;
            } else if (manager == 'Jon Moore') {
                manager = 2;
            } else {
                manager = 3;
            }
            console.log("Creating a new employee...\n");
            //insert into SQL
               connection.query(
                "INSERT INTO employees SET ?",
                {
                  first_name: response.firstName,
                  last_name: response.lastName,
                  manager: manager
                },
                function(err, res) {
                  if(err) throw err;
                }
                );
                connection.query(
                    "INSERT INTO roles SET ?",
                    {
                      title: role,
                      
                    },
                    function(err, res) {
                      if(err) throw err;
                    }
                  );
                  
                  
        
            begin();
        })
}

function viewDepartment() {

}

function viewRoles() {
    
}

function viewEmployees() {
    
}

function updateEmployeeRole() {
    
}

// send out all of our functions to be used in the app
module.exports = {
    addDepartment,
    addRole,
    addEmployee,
    addDepartment,
    viewDepartment,
    viewRoles,
    viewEmployees,
    addRole,
    addEmployee,
    updateEmployeeRole,
    begin
}