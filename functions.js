const inquirer = require("inquirer");
const connection = require("./db/index.js");

class Database {
    constructor(connection) {
        this.connection = connection;
    }
    /////////////////////// view methods (department, role, employee)
    department_view() {
        return this.connection.query("SELECT * FROM department");
    }

    role_view() {
        return this.connection.query("SELECT * FROM role");
    }

    employee_view() {
        return this.connection.query("SELECT first_name, last_name, title FROM employee INNER JOIN role ON role_id = role.id");
    }
    manager_view(){
        return this.connection.query("SELECT * FROM employee WHERE id=1");
    }

    ////////add methods (department, role, employee)
    department_add() {
        inquirer
            .prompt({
                name: "name",
                type: "input",
                message: "What is the department name?",
            })
            .then(function (response) {
                this.connection.query(
                    `INSERT INTO department (name) VALUES ("${response.name}")`,
                    function (err, results) {
                        if (err) throw err;
                        console.table(results);
                    }
                );
            });
    }

    role_add() {
        inquirer
            .prompt([
                {
                    name: "title",
                    type: "input",
                    message: "What is the Role title?",
                },
                {
                    name: "salary",
                    type: "number",
                    message: "What is the Role salary?",
                },
                {
                    name: "department_id",
                    type: "input",
                    message: "what department is it does this Role belong to?",
                },
            ])
            .then(function (response) {
                this.connection.query(
                    `INSERT INTO role (title,salary,department_id) VALUES ("${response.title}",${response.salary},${response.department_id})`,
                    function (err, results) {
                        if (err) throw err;
                        console.table(results);
                    }
                );
            });
    }

    employee_add() {
       return this.connection.query(
            `INSERT INTO employee (first_name, last_name, role_id,manager_id) VALUES ("${newEmp.first_name}","${newEmp.last_name}",${newEmp.role_id},${newEmp.manager_id})`,
        );
    }


    ///////////////update method for employee
    employee_update() {
        inquirer
            .prompt([
                {
                    name: "first_name",
                    type: "input",
                    message:
                        "What is the first name of the employee that you would like to update?",
                },
                {
                    name: "last_name",
                    type: "input",
                    message:
                        "What is the last name of the employee that you would like to update?",
                },
                {
                    name: "role_id",
                    type: "input",
                    message: "What role would you like to change it to?",
                },
            ])

            .then(function (response) {
                this.connection.query(
                    `Update employee SET role_id = ${response.role_id} WHERE first_name = "${response.first_name}", last_name = "${response.last_name}" `,
                    function (err, results) {
                        if (err) throw err;
                        console.table(results);
                    }
                );
            });
    }
};

//export database and myDatabase
module.exports = new Database(connection);
