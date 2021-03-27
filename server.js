const inquirer = require("inquirer");
const mysql = require("mysql");
const { inherits } = require("node:util");
const { employees, roles, departments } = require("./functions");


const connection = mysql.createConnection({
  host: "localhost",

  port: 5000,

  user: "sergiogomez100000",

  password: "",
  database: "employee_db",
});

connection.connect((err) => {
  if (err) throw err;
  console.log(`Connected as id ${connection.thread.Id}`);

  init();
});

function init() {
  inquirer
    .prompt([
      {
        name: "Menu",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "View Employees",
          "View Roles",
          "View Departments",
          "Add Employee",
          "Add Role",
          "Add Department",
          "Update Employee Role",
        ],
      },
    ])
    .then(function (response) {
      switch (response.Menu) {
        case "View Employees":
          employees.view;
          break;
        case "View Roles":
          roles.view;
          break;
        case "View Departments":
          departments.view;
          break;
        case "Add Employee":
          employees.add;
          break;
        case "Add Role":
           roles.add;
          break;
        case "Add Department":
          departments.add;
          break;
        case "Update Employee Role":
          employees.update;
          break;
      }
    });
}


module.exports = init;