const inquirer = require("inquirer");

class database {
    constructor(connection) {
        this.connection = connection;
    }

    department_view() {
        this.connection.query("Select * FROM department", function (err, results) {
            if (err) throw err;
            console.table(results);
            init();
        });
    }
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



    role_view() {
        this.connection.query("Select * FROM role", function (err, results) {
            if (err) throw err;
            console.table(results);
            init();
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



    employee_view(){
         this.connection.query("SELECT * FROM employee", function (err, results) {
            if (err) throw err;
            console.table(results);
        });
    }
    employee_add(){
        inquirer
            .prompt([
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
                {
                    name: "role_id",
                    type: "input",
                    message: "what is the employee's Role?",
                },
                {
                    name: "manager_id",
                    type: "input",
                    message: "Who is this employee' manager? ",
                },
            ])
            .then(function (response) {
                this.connection.query(
                    `INSERT INTO employee (first_name, last_name, role_id,manager_id) VALUES ("${response.first_name}","${response.last_name}",${response.role_id},${response.manager_id})`,
                    function (err, results) {
                        if (err) throw err;
                        console.table(results);
                    }
                );
            });
    }
    employee_update(){
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


module.exports = database;
