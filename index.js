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
    // .then(function (answer) {
    //   console.log(answer.Menu)
    //   switch (answer.Menu) {
    //     case "View Employees":
    //       viewAllEmployees();
    //       break;
        // case "View Roles":
        //   role_view();
        //   // init();
        //   break;
        // case "View Departments":
        //   department_view();
        //   init();
        //   break;
        // case "Add Employee":
        //   database.employee_add();
        //   init();
        //   break;
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
        // default:
        //   init();
    //   }
    //   // });
    // })

}



  // async function viewAllEmployees() {
  //   console.log("Viewing employees..")
  //   const employees = await database.employee_view();
  //   console.table(employees);
  //   loadPrompts();
  // }

// async function viewAllEmployees(){
//   console.log("Viewing employees..")
//   const employees = await database.employee_view();
//   console.table(employees);
//   loadPrompts();
// }



// function department_view(){
//   console.log("Viewing departments..")
//    database.department_view()
//   .then(data => {
//     console.log(data)

//     init();
//   })
//   .catch(e => console.error(e))
// }
// async function createEmployee() { // cREATE
//   const allRoles = await database.role_view();
//   // inquirer.prompt to get first name & last name
//   const newEmp = await inquirer.prompt([
//     {
//       name: "first_name",
//       question: "What is the employee's first name"
//     }
//   ])  // no .then

//   // offer role choices
//   allRoles.map(({id, title}) => ({
//     name: title,
//     value: id
//   }))

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