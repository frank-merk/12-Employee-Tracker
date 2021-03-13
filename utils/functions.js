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
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'departmentName',
            message: "Enter a new department."

        }
    ]).then(function (response) {
        const createDepartment = "INSERT INTO department (name) VALUES ('" + response.departmentName + "');";
        console.log("Writing new department to Employee Tracker...\n");
        //insert into department table in SQL
           connection.query(createDepartment, function(err, res){
            if (err) throw err;
            console.log(response.departmentName + "written to database" + "\n");
        })
        begin();
    })
   
}

function addRole(){
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'newRole',
                message: "Enter the role you'd like to create.",

            },

            {
                type: 'input',
                name: 'salary',
                message: "Enter the salary for this role.",

            },

            {
                type: 'list',
                name: 'department',
                message: "Select a department for the new role.",
                choices: ["Logistics", "Production", "Post-Production"]

            }

        ]).then(function (response) {
        
           let department = response.department;
           switch(department) {
               case "Production":
                   department = 1;
                   break;
                case "Post-Production":
                    department = 2;
                    break;
                case "Logistics":
                    department = 3;
                    break; 
           }
            console.log("Writing role to Employee Tracker...\n");
            //insert into employee database in SQL
               connection.query(
                "INSERT INTO roles SET ?",
                {
                  title: response.newRole,
                  salary: response.salary,
                  department_id: department,
                },
                function(err, res) {
                  if(err) throw err;
                  
                }
            );
            console.log ("Success");
            connection.end();
            begin();
        })
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
            // setting up manager id
            let manager = response.boss
            if (manager == 'none') {
                manager = null;
                
            } else if (manager == 'Joel Coen') {
                manager = 1;
            } else if (manager == 'Rachel Theman') {
                manager = 2;
            } else {
                manager = 3;
            }
            console.log("Writing employee to Employee Tracker...\n");
            //insert into employee database in SQL
               connection.query(
                "INSERT INTO employee SET ?",
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
            console.log ("Success");
            connection.end();
            begin();
        })
}

// print out all departments
function viewDepartment() {
    const createDepartmentTable = "SELECT * FROM employees_db.department";
    connection.query(createDepartmentTable, function (err, res) {
        if (err) throw err;
        console.table(res);
        console.log("\n");
        
    })
}

function viewRoles() {
    const createRoleTable = "SELECT * FROM employees_db.roles";
    connection.query(createRoleTable, function (err, res) {
            if (err) throw err;
            console.table(res)
            console.log("\n");
            
        })
        begin();

}


function viewEmployees() {
    const createEmployeeTable = "SELECT emp.id as ID, CONCAT(emp.first_name, ' ', emp.last_name) as Employee, name as Department, title as Title, salary as Salary,  CONCAT(mgr.first_name, ' ', mgr.last_name) as Manager FROM employee emp LEFT JOIN roles ON roles.id = emp.roles_id LEFT JOIN department ON department.id = roles.department_id LEFT JOIN employee mgr ON mgr.id = emp.manager_id ORDER BY emp.id"
    connection.query(createEmployeeTable, function (err, res) {
            if (err) throw err;
            console.table(res)
            console.log("\n");
        })
        begin();
}

function updateEmployeeRole() {
    console.log(getDepartments());
}

// send out all of our functions to be used in the app
module.exports = {
    begin
}