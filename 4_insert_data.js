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
    console.log("1. Insert Student Data"); 
    console.log("2. Insert Teacher Data");
    console.log("3. Insert Subject Data");
    console.log("4. Insert Batch Data");
    console.log("5. Insert Changes Data");
    console.log("6. Exit");
    var choice = readline.question("Enter your choice: ");
    switch(choice){
        case "1":
            insert_student_data();
            break;
        case "2":
            insert_teacher_data();
            break;
        case "3":
            insert_subject_data();
            break;
        case "4":
            insert_batch_data();
            break;
        case "5":
            insert_changes_data();
            break;
        case "6":
            pool.end();
            break;
}

function insert_student_data(){
    var std_id = readline.question("Enter Student ID(eg. 076BEI001): ");
    var name = readline.question("Enter Student Name(eg. Richard Sandwitch): ");
    var email = readline.question("Enter Student Email(eg. therealsandwitch@gmail.com): ");
    var is_CR = readline.question("Is Student CR?(eg. true or false): ");
    var password = readline.question("Enter Student Password: ");
    var batch_id = readline.question("Enter Student Batch ID(eg. 076BEIA): ");
    var section = readline.question("Enter Student Section(A/B/C/D): ");
    if(readline.question("Confirm(y/n): ").toLowerCase() == "y"){
        console.log("Inserting Student Data...");
        pool.query("INSERT INTO student (std_id, name, email, is_CR, password, batch_id, section) VALUES ($1, $2, $3, $4, $5, $6, $7)",[std_id, name, email, is_CR, password, batch_id, section],(err, res) => {
            if(err) {
                console.log(err);
            }
            // pool.end();
        });
    }
}

function insert_teacher_data(){
    var teacher_id = readline.question("Enter Teacher ID(eg. RS): ");
    var name = readline.question("Enter Teacher Name(eg. Richard Sandwitch): ");
    var email = readline.question("Enter Teacher Email(eg. therealsandwitch@gmail.com): ");
    if(readline.question("Confirm(y/n): ").toLowerCase() == "y"){
        console.log("Inserting Teacher Data...");
        pool.query("INSERT INTO teacher (teacher_id, name, email) VALUES ($1, $2, $3)",[teacher_id, name, email],(err, res) => {
            if(err) {
                console.log(err);
            }
            // pool.end();
        });
    }
}

function insert_subject_data(){
    var subject_id = readline.question("Enter Subject ID(eg. CT610): ");
    var name = readline.question("Enter Subject Name(eg. Database Management Systems): ");
    if(readline.question("Confirm(y/n): ").toLowerCase() == "y"){
        console.log("Inserting Subject Data...");
        pool.query("INSERT INTO subject (subject_id, name) VALUES ($1, $2)",[subject_id, name],(err, res) => {
            if(err) {
                console.log(err);
            }
            // pool.end();
        });
    }
}

function insert_batch_data(){
    var batch_id = readline.question("Enter Batch ID(eg. 076BEIA): ");
    var section = readline.question("Enter Section(A/B/C/D): ");
    if(readline.question("Confirm(y/n): ").toLowerCase() == "y"){
        console.log("Inserting Batch Data...");
        pool.query("INSERT INTO batch_dep (batch_id, section) VALUES ($1, $2)",[batch_id, section],(err, res) => {
            if(err) {
                console.log(err);
            }
            // pool.end();
        });}
    }
}

print_menu();