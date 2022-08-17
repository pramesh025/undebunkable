// Importing the module
const readline = require("readline-sync");

const { Pool }= require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'undebunkable',
    password: 'asdf',
    port: 5432,
})

function print_menu(){
    console.log("1. View Student Data");
    console.log("2. View Teacher Data");
    console.log("3. View Subject Data");
    console.log("4. View Batch Data");
    console.log("5. Exit");
    var choice = readline.question("Enter your choice: ");
    switch(choice){
        case "1":
            view_student_data();
            break;
        case "2":
            view_teacher_data();
            break;
        case "3":
            view_subject_data();
            break;
        case "4":
            view_batch_data();
            break;
        case "5":
            pool.end();
            break;
    }
}

function view_student_data(){
    console.log("Viewing Student Data...");
    pool.query("SELECT * FROM student",(err, res) => {
        if(err) {
            console.log(err);
        }
        else {
            console.table(res.rows);
        }
    });
}

function view_teacher_data(){
    console.log("Viewing Teacher Data...");
    pool.query("SELECT * FROM teacher",(err, res) => {
        if(err) {
            console.log(err);
        }
        else {
            console.table(res.rows);
        }
    });
}

function view_subject_data(){
    console.log("Viewing Subject Data...");
    pool.query("SELECT * FROM subject",(err, res) => {
        if(err) {
            console.log(err);
        }
        else {
            console.table(res.rows);
        }
    });
}

function view_batch_data(){
    console.log("Viewing Batch Data...");
    pool.query("SELECT * FROM batch_dep",(err, res) => {
        if(err) {
            console.log(err);
        }
        else {
            console.table(res.rows);
        }
    });
}

print_menu();