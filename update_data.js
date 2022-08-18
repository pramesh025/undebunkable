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
    var id = readline.question("Enter student id(eg 076bei001): ");
    pool.query("SELECT * FROM student WHERE std_id = '" + id + "'",(err, res) => {
        if(err) {
            console.log(err);
        }
        else {
            console.table(res.rows);
            if(res.rows.length > 0){
                if(readline.question("Are you sure you want to update this student?(y/n): ").toLowerCase() == "y"){
                    var name = readline.question("Enter student name: ");
                    var email = readline.question("Enter student email: ");
                    var isCR = readline.question("Enter student isCR(t/f): ");
                    var password = readline.question("Enter student password: ");
                    pool.query("UPDATE student SET name='" + name + "', email='" + email + "', is_cr='" + isCR + "', password='" + password + "' WHERE std_id='"+id+"'",(err, res) => {
                        if(err) {
                            console.log(err);
                        }
                        else {
                            console.log("Student updated successfully");
                        }
                    }
                    );
                }
            }
        }
    });
}

function update_teacher_data(){
    var id = readline.question("Enter teacher id(eg BS): ");
    pool.query("SELECT * FROM teacher WHERE teacher_id = '" + id + "'",(err, res) => {
        if(err) {
            console.log(err);
        }
        else {
            console.table(res.rows);
            if(res.rows.length > 0){
                if(readline.question("Are you sure you want to update this teacher?(y/n): ").toLowerCase() == "y"){
                    var name = readline.question("Enter teacher name: ");
                    var email = readline.question("Enter teacher email: ");
                    pool.query("UPDATE teacher SET name='" + name + "', email='" + email + "'WHERE teacher_id='"+id+"'",(err, res) => {
                        if(err) {
                            console.log(err);
                        }
                        else {
                            console.log("Teacher updated successfully");
                        }
                    }
                    );
                }
            }
        }
    });
}

function update_subject_data(){
    var id = readline.question("Enter subject id(eg CT610): ");
    pool.query("SELECT * FROM subject WHERE subject_id = '" + id + "'",(err, res) => {
        if(err) {
            console.log(err);
        }
        else {
            console.table(res.rows);
            if(res.rows.length > 0){
                if(readline.question("Are you sure you want to update this subject?(y/n): ").toLowerCase() == "y"){
                    var name = readline.question("Enter subject name: ");
                    pool.query("UPDATE subject SET name='" + name+"' WHERE subject_id='"+id + "'", (err, res) => {
                        if(err) {
                            console.log(err);
                        }
                        else {
                            console.log("Subject updated successfully");
                        }
                    }
                    );
                }
            }
        }
    }
    );


}

print_menu();