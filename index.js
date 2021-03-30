const inquirer = require("inquirer");
const { prompt } = require("inquirer");
const mysql = require("mysql");
const database = require("./functions");
// console table
require("console.table");


init();

function init() {

  loadPrompts();
}

function loadPrompts() {

  prompt([
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
    .then(function (answer) {
      switch (answer.Menu) {
        case "View Employees":
          viewAllEmployees();
          break;
        case "View Roles":
          viewAllRoles();
          break;
        case "View Departments":
          viewAllDepartments();
          break;
        case "Add Employee":
          addEmployee();
          break;
        // case "Add Role":
        //   database.role_add();
        //    init();
        //   break;
        // case "Add Department":
        //   database.department_add();
        //   init();
        //   break;
        // case "Update Employee Role":
        //   database.employee_update();
        // //   init();
        //   break;
        default:
          init();
      }
    });
}



async function viewAllEmployees() {
  console.log("Viewing employees..")
  const employees = await database.employee_view();
  console.table(employees);
  loadPrompts();
}

async function viewAllRoles() {
  console.log("Viewing roles..")
  const roles = await database.role_view();
  console.table(roles);
  loadPrompts();
}

async function viewAllDepartments() {
  console.log("Viewing departments..")
  const departments = await database.department_view();
  console.table(departments);
  loadPrompts();
}


async function addEmployee() { // cREATE
  const allRoles = await database.role_view();
  const allManagers = await database.manager_view();
  newEmp = [];
  newEmp.Name = await
    prompt([
      {
        name: "first_name",
        type: "input",
        message: "What is the employee's first name?",
      },
      {
        name: "last_name",
        type: "input",
        message: "What is the employee's last name?",
      },
    ])
   newEmp.Role= await prompt(
    {
      name: "role_id",
      type: "rawlist",
      message: "what is the employee's Role?",
      choices: allRoles.map(({id, title}) => ({
        name: title,
        value: id
      }))
    }),

   newEmp.Manager = await prompt({
       name: "manager_id",
      type: "rawlist",
      message: "Who is this employee's manager?",
      choices: allManagers.map(({id,title})=>({
        name:title,
        value: id
      }))
    }),
    await database.employee_add(newEmp);
    console.log("Employee has been added!!");
    console.table(employees);
  loadPrompts();
}
//   newEmp.role = roleId

//   // give them manager choices

//   await database.create_employee(newEmp);

//   // print a message that employee was created

//   // load prompts again

// }

// function employee_update() {
//   // get all the employees --> choose which employee
//   // map over all employees, and render each as option

//   // new set of inquirer.prompts for updating role --> which employee's role to update

//   // show all the roles

//   // database.updateEmployeeRole(empId, roleId);

//   // init()
//}