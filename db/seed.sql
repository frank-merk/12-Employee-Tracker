INSERT INTO department (name) VALUES ("Production");
INSERT INTO department (name) VALUES ("Post-Production");
INSERT INTO department (name) VALUES ("Logistics");

INSERT INTO roles (title, salary, department_id) VALUES ("Director", 255342, (SELECT id FROM department WHERE NAME = "Production"));
INSERT INTO roles (title, salary, department_id) VALUES ("Lead Actor", 200143, (SELECT id FROM department WHERE NAME = "Production"));
INSERT INTO roles (title, salary, department_id) VALUES ("Lead Actress", 200143, (SELECT id FROM department WHERE NAME = "Production"));
INSERT INTO roles (title, salary, department_id) VALUES ("Best Boy", 32814, (SELECT id FROM department WHERE NAME = "Production"));
INSERT INTO roles (title, salary, department_id) VALUES ("Lead Hair and Makeup", 73412, (SELECT id FROM department WHERE NAME = "Production"));
INSERT INTO roles (title, salary, department_id) VALUES ("Chief Editor", 95372, (SELECT id FROM department WHERE NAME = "Post-Production"));
INSERT INTO roles (title, salary, department_id) VALUES ("Junior VFX Designer", 60138, (SELECT id FROM department WHERE NAME = "Post-Production"));
INSERT INTO roles (title, salary, department_id) VALUES ("Executive Producer", 311382, (SELECT id FROM department WHERE NAME = "Logistics"));
INSERT INTO roles (title, salary, department_id) VALUES ("Accountant", 63045, (SELECT id FROM department WHERE NAME = "Logistics"));
INSERT INTO roles (title, salary, department_id) VALUES ("Legal Analyst", 81032, (SELECT id FROM department WHERE NAME = "Logistics"));
INSERT INTO roles (title, salary, department_id) VALUES ("Head Caterer", 52313, (SELECT id FROM department WHERE NAME = "Logistics"));




INSERT INTO employee (first_name, last_name, manager_id, roles_id) VALUES ("Joel", "Coen", null, (SELECT id FROM roles WHERE title = "Director"));
INSERT INTO employee (first_name, last_name, manager_id, roles_id) VALUES ("Rachel", "Theman", null, (SELECT id FROM roles WHERE title = "Chief Editor"));
INSERT INTO employee (first_name, last_name, manager_id, roles_id) VALUES ("Jon", "Moore", null, (SELECT id FROM roles WHERE title = "Executive Producer"));


INSERT INTO employee (first_name, last_name, manager_id, roles_id) VALUES ("Jeff", "Bridges", (SELECT id FROM roles WHERE title = "Director"), (SELECT id FROM roles WHERE title = "Lead Actor"));
INSERT INTO employee (first_name, last_name, manager_id, roles_id) VALUES ("Julianne", "Moore", (SELECT id FROM roles WHERE title = "Director"), (SELECT id FROM roles WHERE title = "Lead Actress"));

INSERT INTO employee (first_name, last_name, manager_id, roles_id) VALUES ("Lisa", "Pryzlbilski", (SELECT id FROM department WHERE name = "Production"), (SELECT id FROM roles WHERE title = "Best Boy"));
INSERT INTO employee (first_name, last_name, manager_id, roles_id) VALUES ("Amy", "Santiago", (SELECT id FROM department WHERE name = "Production"), (SELECT id FROM roles WHERE title = "Lead Hair and Makeup"));
INSERT INTO employee (first_name, last_name, manager_id, roles_id) VALUES ("Chou", "Tranh", (SELECT id FROM department WHERE name = "Post-Production"), (SELECT id FROM roles WHERE title = "Junior VFX Designer"));

INSERT INTO employee (first_name, last_name, manager_id, roles_id) VALUES ("Dan", "Theman", (SELECT id FROM department WHERE name = "Logistics"), (SELECT id FROM roles WHERE title = "Head Caterer"));
INSERT INTO employee (first_name, last_name, manager_id, roles_id) VALUES ("Andy", "Bauer", (SELECT id FROM department WHERE name = "Logistics"), (SELECT id FROM roles WHERE title = "Accountant"));
INSERT INTO employee (first_name, last_name, manager_id, roles_id) VALUES ("Rick", "Steves", (SELECT id FROM department WHERE name = "Logistics"), (SELECT id FROM roles WHERE title = "Legal Analyst"));