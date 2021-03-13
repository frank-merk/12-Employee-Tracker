const prompts = [
    {
      type: "list",
         name: "home",
         type: "list",
         message: "What would you like to do?",
         choices: [

            "Add a Department",
           "Add a Role",
           "Add an Employee",
            "View Departments",
            "View Roles",
           "View Employees",
           "Update an Employee Role",
           "Quit"
        
         ]
   },
 ]
 
         
      
 module.exports = prompts;