const inquirer = require("inquirer");
const mysql = require("mysql");
const { inherits } = require("node:util");

const connection = mysql.createConnection({
    host: "localhost",

    port: 5000,

    user:"sergiogomez100000",

    password: '',
    database: "employeeDB",
});

connection.connect((err) =>{
    if(err) throw err;
    console.log(`Connected as id ${connection.thread.Id}`);

    init();
});

function init(){
    inquirer.prompt([{
        name: "Menu",
        type: "list",
        message:"What would you like to do?",
        choices: ["Add Department","Add Role","Add Employee","View Departments","View Roles","View Employees"]


    }])
}