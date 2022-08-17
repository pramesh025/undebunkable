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
    console.log("1. delete Student Data");
    console.log("2. delete Teacher Data");
    console.log("3. delete Subject Data");
    console.log("4. Exit");
    var choice = readline.question("Enter your choice: ");
    switch(choice){
        case "1":
            delete_student_data();
            break;
        case "2":
            delete_teacher_data();
            break;
        case "3":
            delete_subject_data();
            break;
        case "4":
            pool.end();
            break;
    }
}

function delete_student_data(){
    console.log("Deleting Student Data...");
    console.log("Delete by Student ID(eg 076bei001)");
    var id = readline.question("Enter student id(eg 076bei001): ");
    pool.query("SELECT * FROM student WHERE std_id = '" + id + "'",(err, res) => {
        if(err) {
            console.log(err);
        }
        else {
            console.table(res.rows);
        }
        if(res.rows.length > 0){
            var choice = readline.question("Are you sure you want to delete this student?(y/n): ");
            if(choice.toLowerCase() == "y"){
                pool.query("DELETE FROM student WHERE std_id = '" + id + "'",(err, res) => {
                    if(err) {
                        console.log(err);
                    }
                    else {
                        console.log("Student deleted successfully");
                    }
                }
                );
            }
            else{
                console.log("Student not deleted");
            }
        }
    });
}

function delete_teacher_data(){
    console.log("Deleting Teacher Data...");
    console.log("Delete by Teacher ID(eg LNR)");
    var id = readline.question("Enter teacher id(eg LNR): ");
    pool.query("SELECT * FROM teacher WHERE teacher_id = '" + id + "'",(err, res) => {
        if(err) {
            console.log(err);
        }
        else {
            console.table(res.rows);
        }
        if(res.rows.length > 0){
            var choice = readline.question("Are you sure you want to delete this teacher?(y/n): ");
            if(choice.toLowerCase() == "y"){
                pool.query("DELETE FROM teacher WHERE teacher_id = '" + id + "'",(err, res) => {
                    if(err) {
                        console.log(err);
                    }
                    else {
                        console.log("Teacher deleted successfully");
                    }
                }
                );
                pool.query("DELETE FROM lesson WHERE teacher_id = '" + id + "'",(err, res) => {
                    if(err) {
                        console.log(err);
                    }
                    else {
                        console.log("Lesson deleted successfully");
                    }
                }
                );
            }
            else{
                console.log("Teacher not deleted");
            }
        }
    }
    );
}

function delete_subject_data(){
    console.log("Deleting Subject Data...");
    console.log("Delete by Subject ID(eg EX603)");
    var id = readline.question("Enter subject id(eg EX603): ");
    pool.query("SELECT * FROM subject WHERE subject_id = '" + id + "'",(err, res) => {
        if(err) {
            console.log(err);
        }
        else {
            console.table(res.rows);
        }
        if(res.rows.length > 0){
            var choice = readline.question("Are you sure you want to delete this subject?(y/n): ");
            if(choice.toLowerCase() == "y"){
                pool.query("DELETE FROM subject WHERE subject_id = '" + id + "'",(err, res) => {
                    if(err) {
                        console.log(err);
                    }
                    else {
                        console.log("Subject deleted successfully");
                    }
                }
                );
                pool.query("DELETE FROM lesson WHERE subject_id = '" + id + "'",(err, res) => {
                    if(err) {
                        console.log(err);
                    }
                    else {
                        console.log("Lesson deleted successfully");
                    }
                }
                );
            }
            else{
                console.log("Subject not deleted");
            }
        }
    }
    );
}

print_menu();