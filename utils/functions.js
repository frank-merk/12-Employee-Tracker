// Employee needs role ID which references the *primary* ID of a role
// make an accountant primary key = 1...then an employee with a role id of 1 is an accountant

const inquirer = require("inquirer");
const prompts = require('./inquirerPrompts');
const connection = require('../connection');
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