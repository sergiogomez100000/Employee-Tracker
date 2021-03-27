const inquirer = require("inquirer");
const mysql = require("mysql");
const { inherits } = require("node:util");

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
          "Add Employee",
          "Add Role",
          "Add Department",
          "Update Employee Roles",
        ],
      },
    ])
    .then(function (response) {
      switch (response.Menu) {
        case "View All Employees":
          viewEmployees();
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "Add Role":
          addRole();
          break;
        case "Add Department":
          addDepartment();
          break;
        case "Update Employee Roles":
          updateEmployeeRoles();
          break;
      }
    });
}

function viewEmployees(){

};

function addEmployee(){

};
function updateEmployeeRoles(){

};