const readline = require("readline-sync");

const { Pool }= require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'undebunkable',
    password: 'asdf',
    port: 5432,
})

function login_page(){
    console.log("Welcome to the login page!");
    var std_id = readline.question("Enter your rollno.: ");
    var password = readline.question("Enter your password: ", {hideEchoBack: true});
    pool.query("SELECT * FROM student WHERE std_id = $1 AND password = $2",[std_id, password],(err, res) => {
        if(err) {
            console.log(err);
        }
        else {
            if(res.rows.length == 0){
                console.log("Invalid username or password!");
                login_page();
            }
            else{
                console.log("Login successful!");
                console.log("Welcome, " + res.rows[0].name + "!");
                stud_page(std_id);
            }
        }
    }
    );
}
function stud_page(std_id){
    console.clear();
    //print name, Rollno., email, section
    pool.query("SELECT * FROM student WHERE std_id = $1",[std_id],(err, res) => {
        if(err) {
            console.log(err);
        }
        else {
            console.log("Name: " + res.rows[0].name);
            console.log("Rollno.: " + res.rows[0].std_id);
            console.log("Email: " + res.rows[0].email);
            console.log("Section: " + res.rows[0].section);
            //print routine

            var id=res.rows[0].batch_id;
            pool.query("SELECT day, MAX(CASE WHEN (start_time ='10:15:00' OR end_time='11:05:00') Then subject END) AS period1,MAX(CASE WHEN (start_time ='11:05:00' OR end_time='11:55:00')Then subject END) AS period2,MAX(CASE WHEN (start_time ='11:55:00' OR end_time='12:45:00')Then subject END) AS period3,MAX(CASE WHEN (start_time ='12:45:00' OR end_time='13:35:00')Then subject END) AS period4,MAX(CASE WHEN (start_time ='13:35:00' OR end_time='14:25:00')Then subject END) AS period5,MAX(CASE WHEN (start_time ='14:25:00' OR end_time='15:15:00')Then subject END) AS period6,MAX(CASE WHEN (start_time ='15:15:00' OR end_time='16:05:00')Then subject END) AS period7,MAX(CASE WHEN (start_time ='16:05:00' OR end_time='16:55:00')Then subject END) AS period8 FROM (SELECT day.name AS day,start_time,end_time, CONCAT(subject_id,'/',teacher_id) AS subject FROM (time_slot INNER JOIN day ON day.day_id=time_slot.day_id) WHERE def_rout_id = '" + id + "') AS data GROUP BY day ",(err,res)=>{
                if(err)
                    console.log(err)
                else
                    console.table(res.rows)
            });
        }
    })
}

login_page();