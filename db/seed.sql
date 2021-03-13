INSERT INTO department (name) VALUES ("Talent"); 
INSERT INTO department (name) VALUES ("Production");
INSERT INTO department (name) VALUES ("Post-Production");
INSERT INTO department (name) VALUES ("Logistics");
INSERT INTO department (name) VALUES ("Accounting");

INSERT INTO roles (title, salary, department_id) VALUES ("Lead Actor", 200143, 1);
INSERT INTO roles (title, salary, department_id) VALUES ("Lead Actress", 200143, 1);
INSERT INTO roles (title, salary, department_id) VALUES ("Director", 255342, 2);
INSERT INTO roles (title, salary, department_id) VALUES ("Lead Hair and Makeup", 73412, 2);
INSERT INTO roles (title, salary, department_id) VALUES ("Executive Producer", 311382, 2);
INSERT INTO roles (title, salary, department_id) VALUES ("Chief Editor", 95372, 3);
INSERT INTO roles (title, salary, department_id) VALUES ("Junior Special Effects Designer", 60138, 3);
INSERT INTO roles (title, salary, department_id) VALUES ("Head Caterer", 52313, 4);
INSERT INTO roles (title, salary, department_id) VALUES ("Best Boy", 32814, 4);
INSERT INTO roles (title, salary, department_id) VALUES ("Accountant", 63045, 5);
INSERT INTO roles (title, salary, department_id) VALUES ("Legal Analyst", 81032, 5);


INSERT INTO employee (first_name, last_name, manager_id, roles_id) VALUES ("Jeff", "Bridges", null, 6);
INSERT INTO employee (first_name, last_name, manager_id, roles_id) VALUES ("Julianne", "Moore", null, 7);
INSERT INTO employee (first_name, last_name, manager_id, roles_id) VALUES ("Joel", "Coen", 1, 1);
INSERT INTO employee (first_name, last_name, manager_id, roles_id) VALUES ("Wendy", "Bambenek", null, 2);
INSERT INTO employee (first_name, last_name, manager_id, roles_id) VALUES ("Lisa", "Pryzlbilski", null, 3);
INSERT INTO employee (first_name, last_name, manager_id, roles_id) VALUES ("Jon", "Moore", 2, 4);
INSERT INTO employee (first_name, last_name, manager_id, roles_id) VALUES ("Chou", "Tranh", null, 5);
INSERT INTO employee (first_name, last_name, manager_id, roles_id) VALUES ("Amy", "Santiago", null, 11);
INSERT INTO employee (first_name, last_name, manager_id, roles_id) VALUES ("Dan", "Theman", null, 9);
INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUES ("Rachel", "Theman", 3, 10);