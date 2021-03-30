INSERT INTO department (name)
VALUES ("Management");

INSERT INTO department (name)
VALUES ("Sales");

INSERT INTO department (name)
VALUES ("Engineering");

INSERT INTO role (title, salary, department_id)
VALUES ("Manager", 150000, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Salesperson", 100000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Engineer", 80000, 3);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Tucker", "Beauchamp", 1 );

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Dan", "Lucas", 2, 1);

INSERT INTO employee (first_name, last_name , role_id, manager_id)
VALUES ("Sergio", "Gomez", 3 , 1);