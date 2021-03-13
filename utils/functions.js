// inquirer  for questions, prompts has the pre-written intro options, connection starts/stops the app.
const inquirer = require("inquirer");
const prompts = require('./inquirerPrompts');
const connection = require('./connection');

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
                choices: ['Lead Actor', 'Lead Actress', 'Lead Hair and Makeup', 'Junior VFX Designer', 'Head Caterer', 'Best Boy', 'Accountant', 'Legal Analyst']

            },

            {
                type: 'list',
                name: 'boss',
                message: "Who is the employee's manager?",
                choices: ['Joel Coen', 'Rachel Theman', 'Jon Moore', 'none']

            },

        ]).then(function (response) {

            //change role.response to role id
            let role = response.role;
            switch(role){
            case "Lead Actor":
                role = 2;
                break;
            case "Lead Actress":
                role = 3;
                break
            case "Best Boy":
                role = 4;
                break;
            case "Lead Hair and Makeup":
                role = 5;
                break;
            case "Junior VFX Designer":
                role = 7;
                break;
             case "Head Caterer":
                role = 9;
                break;
            case "Accountant":
                role = 10;
                break;
            case "Legal Analyst":
                role = 11;
                break;
           
            default:
                console.log("Good bye!");
            }

            let manager = response.boss
            if (manager == 'none') {
                manager = null;
                
            } else if (manager == 'Joel Coen') {
                manager = 1;
            } else if (manager == 'Rachel Theman') {
                manager = 6;
            } else {
                manager = 8;
            }
            console.log("Creating a new employee...\n");
            //insert into SQL
               connection.query(
                "INSERT INTO employees SET ?",
                {
                  first_name: response.firstName,
                  last_name: response.lastName,
                  roles_id: role,
                  manager_id: manager
                },
                function(err, res) {
                  if(err) throw err;
                }
                );
            connection.end();
            begin();
        })
}

function viewDepartment() {
    connection.query(
        function (err, res) {
            if (err) throw err;
            console.table(res)
            
        })
}

function viewRoles() {
    connection.query(
        function (err, res) {
            if (err) throw err;
            console.table(res)
            
        })
}


function viewEmployees() {
    connection.query(
        function (err, res) {
            if (err) throw err;
            console.table(res)
            
        })
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