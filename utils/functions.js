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