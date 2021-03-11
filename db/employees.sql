DROP DATABASE employees_db;

CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    PRIMARY KEY(id)
);

CREATE TABLE role(
    id INT NOT NULL AUTO_,
    title VARCHAR(30),
    salary DECIMAL(10, 2),
    department_id INT NULL,
    PRIMARY KEY(id),
    foreign key(department_id) REFERENCES department(id)
);

CREATE TABLE employee (
    id int not null auto_increment,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    manager VARCHAR(30),
    PRIMARY KEY(id)
);

