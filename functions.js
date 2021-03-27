const inquirer = require("inquirer");
const init = require("server.js")


const departments = {
    view: function(){
        console.query("Select * FROM department", function (err,results){
            if(err) throw err;
            console.table(results);
            init();
        })
    },
    add: function(){
        inquirer.prompt({
            name: "name",
            type: "input",
            message: "What is the department name?"
        })
        .then(function (response){
            console.query(`INSERT INTO department (name) VALUES ("${response.name}")`, function (err,results){
                if(err) throw err;
                console.table(results);
                init(); 
        })

    
}

const roles = {
    view: function(){
        console.query("Select * FROM role", function (err,results){
            if(err) throw err;
            console.table(results);
            init();
        })
    },
    add: function(){
        inquirer.prompt([{
            name: "title",
            type: "input",
            message: "What is the Role title?"
        },{
            name: "salary",
            type:"number",
            message: "What is the Role salary?",
        },{ 
            name: "department_id",
            type: "input",
            message: "what department is it does this Role belong to?"
        }])

         .then(function (response){
            console.query(`INSERT INTO role (title,salary,department_id) VALUES ("${response.title}",${response.salary},${response.department_id})`, function (err,results){
                if(err) throw err;
                console.table(results);
                init(); 
        })

    }}
}

const employees = {
    view: function(){
        connection.query("SELECT * FROM employee", function(err, results) {
            if (err) throw err;
            console.table(results);
            init(); 
        });
    },
    add: function(){
        inquirer.prompt([{
            name: "first_name",
            type: "input",
            message: "What is the employee's first name?"
        },{
            name: "last_name",
            type:"input",
            message: "What is the employee's last name?"
        },{ 
            name: "role_id",
            type: "input",
            message: "what is the employee's Role?"
        },{
            name: "manager_id",
            type:"input",
            message:"Who is this employee' manager? "
        }])

         .then(function (response){
            console.query(`INSERT INTO employee (first_name, last_name, role_id,manager_id) VALUES ("${response.first_name}","${response.last_name}",${response.role_id},${response.manager_id})`, function (err,results){
                if(err) throw err;
                console.table(results);
                init(); 
        })

    }}
    }, 
    update: function(){
        inquirer.prompt([{
            name:"employee",
            type:"input",
            message:"Which employee's role would you like to update?"
        },{
            name:"role",
            type:"input",
            message:"What role would you like to change it to?"
        }])

        .then(function (response){
            console.query(`INSERT INTO employee (first_name, last_name, role_id,manager_id) VALUES (${response.first_name},${response.last_name},${response.role_id},${response.manager_id})`, function (err,results){
                if(err) throw err;
                console.table(results);
                init();
    }
   


 module.exports = { departments, roles, employees}