const inquirer = require("inquirer");
const mysql = require("mysql");
const database = require("./functions");


const connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "",
  database: "employees_db",
});

connection.connect((err) => {
  if (err) throw err;
  console.log(`Connected as id ${connection.threadId}`);

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
          employee_view();
          init();
          break;
        case "View Roles":
          database.role_view();
          init();
          break;
        case "View Departments":
          database.department_view();
          init();
          break;
        case "Add Employee":
          database.employee_add();
          init();
          break;
        case "Add Role":
          database.role_add();
           init();
          break;
        case "Add Department":
          database.department_add();
          init();
          break;
        case "Update Employee Role":
          database.employee_update();
          init();
          break;
      }
    });
}

function employee_view(){
  console.log("Viewing employees..")
  database.employee_view()
  .then(data => {
    console.log(data)

    init();
  })
  .catch(e => console.error(e))
}