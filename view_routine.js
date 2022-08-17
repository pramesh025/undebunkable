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
    //input def_rout_id
    // var id = readline.question("Enter routine id: ");
    var id='076BEIB'
    pool.query("SELECT day, MAX(CASE WHEN (start_time ='10:15:00' OR end_time='11:05:00') Then subject END) AS period1,MAX(CASE WHEN (start_time ='11:05:00' OR end_time='11:55:00')Then subject END) AS period2,MAX(CASE WHEN (start_time ='11:55:00' OR end_time='12:45:00')Then subject END) AS period3,MAX(CASE WHEN (start_time ='12:45:00' OR end_time='13:35:00')Then subject END) AS period4,MAX(CASE WHEN (start_time ='13:35:00' OR end_time='14:25:00')Then subject END) AS period5,MAX(CASE WHEN (start_time ='14:25:00' OR end_time='15:15:00')Then subject END) AS period6,MAX(CASE WHEN (start_time ='15:15:00' OR end_time='16:05:00')Then subject END) AS period7,MAX(CASE WHEN (start_time ='16:05:00' OR end_time='16:55:00')Then subject END) AS period8 FROM (SELECT day.name AS day,start_time,end_time, CONCAT(subject_id,'/',teacher_id) AS subject FROM (time_slot INNER JOIN day ON day.day_id=time_slot.day_id) WHERE def_rout_id = '" + id + "') AS data GROUP BY day ",(err,res)=>{
        if(err)
            console.log(err)
        else
            console.table(res.rows)
    });
}

print_menu();   
