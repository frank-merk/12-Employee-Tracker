// requiring connections to our mysql database, inquirere for prompts, functions that live in their own doc, figlet for displaying the initial header, and console.table (ctable) for displaying data

const connection = require("./connection")
const functions = require('./utils/functions');
var figlet = require('figlet');


// do the connection to the database
connection.connect((err) => {
  if (err) throw err;
  welcome();
});

function welcome() {
  figlet('Employee Tracker', function(err, data) {
      if (err) {
          console.log('something went wrong...');
          console.dir(err);
          return;
      }
      console.log(data)
      functions.begin(); 
      connection.end();
  });
}