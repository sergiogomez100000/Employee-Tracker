const inquirer = require("inquirer");
const mysql = require("mysql");
const { inherits } = require("node:util");
const View = require("classes.js");
const Add = require("classes.js")

const connection = mysql.createConnection({
  host: "localhost",

  port: 5000,

  user: "sergiogomez100000",

  password: "",
  database: "employeeDB",
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
          class View extends viewEmployees();
          break;
        case "View Roles":
          class View extends viewRoles();
          break;
        case "View Departments":
          class View extends viewDepartments();
          break;
        case "Add Employee":
          class Add extends addEmployee();
          break;
        case "Add Role":
           class Add extends addRole();
          break;
        case "Add Department":
          class Add extends addDepartment();
          break;
        case "Update Employee Role":
          updateEmployeeRole();
          break;
      }
    });
}


function updateEmployeeRole(){

};