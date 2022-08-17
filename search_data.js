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
    console.log("1. Search Student Data");
    console.log("2. Search Teacher Data");
    console.log("3. Search Subject Data");
    console.log("4. Exit");
    var choice = readline.question("Enter your choice: ");
    switch(choice){
        case "1":
            search_student_data();
            break;
        case "2":
            search_teacher_data();
            break;
        case "3":
            search_subject_data();
            break;
        case "4":
            pool.end();
            break;
    }
}

function search_student_data(){
    console.log("Searching Student Data...");
    console.log("1. Search by Student ID(eg 076bei001)");
    console.log("2. Search by Student Name(eg Richard Sandwitch)");
    console.log("3. Search by Student isCR(eg true)");
    console.log("4. go back");
    var choice = readline.question("Enter your choice: ");
    switch(choice){
        case "1":
            var id = readline.question("Enter student id(eg 076bei001): ");
            pool.query("SELECT * FROM student WHERE std_id = '" + id + "'",(err, res) => {
                if(err) {
                    console.log(err);
                }
                else {
                    console.table(res.rows);
                }
            }
            );
            break;
        case "2":
            var name = readline.question("Enter student name(eg Richard Sandwitch): ");
            pool.query("SELECT * FROM student WHERE name = '" + name + "'",(err, res) => {
                if(err) {
                    console.log(err);
                }
                else {
                    console.table(res.rows);
                }
            }
            );
            break;
        case "3":
            var isCR = readline.question("Enter student isCR(t/f): ");
            pool.query("SELECT * FROM student WHERE is_cr = '" + isCR + "'",(err, res) => {
                if(err) {
                    console.log(err);
                }
                else {
                    console.table(res.rows);
                }
            }
            );
            break;
        case "4":
            print_menu();
            break;
        }
}


function search_teacher_data(){
    console.log("Searching Teacher Data...");
    console.log("1. Search by Teacher ID(eg BS)");
    console.log("2. Search by Teacher Name(eg BIBHA STHAPIT)");
    console.log("3. go back");
    var choice = readline.question("Enter your choice: ");
    switch(choice){
        case "1":
            var id = readline.question("Enter teacher id(eg BS): ");
            pool.query("SELECT *  FROM teacher JOIN lesson ON teacher.teacher_id = lesson.teacher_id JOIN (SELECT subject.name as subjectName,subject.subject_id  FROM subject) AS subjects ON subjects.subject_id=lesson.subject_id WHERE teacher.teacher_id = '" + id + "'",(err, res) => {
                if(err) {
                    console.log(err);
                }
                else {
                    console.table(res.rows);
                }
            });
            break;
        case "2":
            var name = readline.question("Enter teacher name(eg Richard Sandwitch): ");
            pool.query("SELECT *  FROM teacher JOIN lesson ON teacher.teacher_id = lesson.teacher_id JOIN (SELECT subject.name as subjectName,subject.subject_id  FROM subject) AS subjects ON subjects.subject_id=lesson.subject_id WHERE teacher.name = '" + name + "'",(err, res) => {
                if(err) {
                    console.log(err);
                }
                else {
                    console.table(res.rows);
                }
            }
            );
            break;
        case "3":
            print_menu();
            break;
        }
}

function search_subject_data(){
    console.log("Searching Subject Data...");
    console.log("1. Search by Subject ID(eg CT610)");
    console.log("2. Search by Subject Name(eg Database Management Systems)");
    console.log("3. go back");
    var choice = readline.question("Enter your choice: ");
    switch(choice){
        case "1":
            var id = readline.question("Enter subject id(eg CT610): ");
            pool.query("SELECT * FROM subject JOIN lesson ON subject.subject_id=lesson.subject_id jOIN(SELECT teacher.name as teacherName,teacher.teacher_id FROM teacher) AS teachers ON teachers.teacher_id=lesson.teacher_id WHERE subject.subject_id = '" + id + "'",(err, res) => {
                if(err) {
                    console.log(err);
                }
                else {
                    console.table(res.rows);
                }
            }
            );
            break;
        case "2":
            var name = readline.question("Enter subject name(eg Richard Sandwitch): ");
            pool.query("SELECT * FROM subject JOIN lesson ON subject.subject_id=lesson.subject_id jOIN(SELECT teacher.name as teacherName,teacher.teacher_id FROM teacher) AS teachers ON teachers.teacher_id=lesson.teacher_id WHERE subject.name = '" + name + "'",(err, res) => {
                if(err) {
                    console.log(err);
                }
                else {
                    console.table(res.rows);
                }
            }
            );
            break;
        case "3":
            print_menu();
            break;
        }
}

print_menu();