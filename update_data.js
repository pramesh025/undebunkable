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
    console.log("1. Update Student Data");
    console.log("2. Update Teacher Data");
    console.log("3. Update Subject Data");
    console.log("4. Exit");
    var choice = readline.question("Enter your choice: ");
    switch(choice){
        case "1":
            update_student_data();
            break;
        case "2":
            update_teacher_data();
            break;
        case "3":
            update_subject_data();
            break;
        case "4":
            pool.end();
            break;
    }
}

function update_student_data(){
    
}