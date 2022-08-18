const { Pool }= require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'undebunkable',
    password: 'asdf',
    port: 5432,
})

function add_batch_id(){
    pool.query("INSERT INTO batch_dep (batch_id, section) VALUES ('076BEIA','A') ",(err, res) => {
        if(err) {
            console.log(err);
        }
    });
    pool.query("INSERT INTO batch_dep (batch_id, section) VALUES ('076BEIB','B') ",(err, res) => {
        if(err) {
            console.log(err);
        }
    });
}

function add_student(){
    pool.query("INSERT INTO student (std_id, name, email, is_CR, password, batch_id,section) VALUES ('076bei025','PRAMESH SHRESTHA','spramesh.shrestha@gmail.com',FALSE,'asdf','076BEIB','B')",(err, res) => {
        if(err) {
            console.log(err);
        }
        // pool.end();
    });
    pool.query("INSERT INTO student (std_id, name, email, is_CR, password, batch_id,section) VALUES ('076bei026','PRASHANT KARN','076bei026.prashant@pcampus.edu.np',FALSE,'qwer','076BEIB','B')",(err, res) => {
        if(err) {
            console.log(err);
        }
        // pool.end();
    });
    pool.query("INSERT INTO student (std_id, name, email, is_CR, password, batch_id,section) VALUES ('076bei047','TRIPTI SHARMA','076bei047.tripti@pcampus.edu.np',FALSE,'zxcv','076BEIB','B')",(err, res) => {
        if(err) {
            console.log(err);
        }
        // pool.end();
    });
}

function add_teacher(){
    pool.query("INSERT INTO teacher (teacher_id, name, email) VALUES ('BS','BIBHA STHAPIT','bibha@gmail.com')");
    pool.query("INSERT INTO teacher (teacher_id, name, email) VALUES ('SS','prof dr SUBARNA SHAKAYA','subarna@gmail.com')");
    pool.query("INSERT INTO teacher (teacher_id, name, email) VALUES ('AV','ANIL VARMA','anil@gmail.com')");
    pool.query("INSERT INTO teacher (teacher_id, name, email) VALUES ('PR','PREM CHANDRA ROY','prem@gmail.com')");
    pool.query("INSERT INTO teacher (teacher_id, name, email) VALUES ('BRD','BABU RAM DAWADI','brd@gmail.com')");
    pool.query("INSERT INTO teacher (teacher_id, name, email) VALUES ('RK','ROSHAN KARKI','roshan@gmail.com')");
}

function add_subject(){
    pool.query("INSERT INTO subject (subject_id, name) VALUES ('CE615','Engineering Economics')");
    pool.query("INSERT INTO subject (subject_id, name) VALUES ('CT610','Database Management Systems')");
    pool.query("INSERT INTO subject (subject_id, name) VALUES ('CT613','Computer Networks')");
    pool.query("INSERT INTO subject (subject_id, name) VALUES ('CT603','Computer Organization and Architecture')");
    pool.query("INSERT INTO subject (subject_id, name) VALUES ('CT612','Operating Systems')");
    pool.query("INSERT INTO subject (subject_id, name) VALUES ('EX605','Filter Design')");
}

function add_lesson(){
    pool.query("INSERT INTO lesson (subject_id, teacher_id) VALUES ('CE615', 'RK')");
    pool.query("INSERT INTO lesson (subject_id, teacher_id) VALUES ('CT610', 'BS')");
    pool.query("INSERT INTO lesson (subject_id, teacher_id) VALUES ('CT613', 'BRD')");
    pool.query("INSERT INTO lesson (subject_id, teacher_id) VALUES ('CT603', 'SS')");
    pool.query("INSERT INTO lesson (subject_id, teacher_id) VALUES ('CT612', 'AV')");
    pool.query("INSERT INTO lesson (subject_id, teacher_id) VALUES ('EX605', 'PR')");
}

function add_def_rout(){
    pool.query("INSERT INTO default_rout (def_rout_id) VALUES ('076BEIA')");
    pool.query("INSERT INTO default_rout (def_rout_id) VALUES ('076BEIB')");
}

function add_day(){
    pool.query("INSERT INTO day (day_id, name) VALUES ('0','sunday')");
    pool.query("INSERT INTO day (day_id, name) VALUES ('1','monday')");
    pool.query("INSERT INTO day (day_id, name) VALUES ('2','tuesday')");
    pool.query("INSERT INTO day (day_id, name) VALUES ('3','wednesday')");
    pool.query("INSERT INTO day (day_id, name) VALUES ('4','thursday')");
    pool.query("INSERT INTO day (day_id, name) VALUES ('5','friday')");
    pool.query("INSERT INTO day (day_id, name) VALUES ('6','saturday')");
}
function add_time_slot(){
    let i = 0;
    //GROUP A
    //SUNDAY
    pool.query("INSERT INTO time_slot (time_id, def_rout_id, day_id, teacher_id, subject_id, start_time, end_time, type) VALUES ('"+ i++ +"','076BEIA','0','RK','CE615','10:15:00','11:55:00','LectureTutorial')");
    pool.query("INSERT INTO time_slot (time_id, def_rout_id, day_id, teacher_id, subject_id, start_time, end_time, type) VALUES ('"+ i+++ "','076BEIA','0','PR','EX605','15:15:00','16:55:00','Lecture')");

    //MONDAY
    pool.query("INSERT INTO time_slot (time_id, def_rout_id, day_id, teacher_id, subject_id, start_time, end_time, type) VALUES ('"+ i+++ "','076BEIA','1','AV','CT612','12:45:00','15:15:00','Lecture/Tutorial')");
    pool.query("INSERT INTO time_slot (time_id, def_rout_id, day_id, teacher_id, subject_id, start_time, end_time, type) VALUES ('"+ i+++ "','076BEIA','1','PR','EX605','15:15:00','16:55:00','Practical')");
    pool.query("INSERT INTO time_slot (time_id, def_rout_id, day_id, teacher_id, subject_id, start_time, end_time, type) VALUES ('"+ i+++ "','076BEIA','1','AV','CT612','15:15:00','16:55:00','Practical')");

    //TUESDAY
    pool.query("INSERT INTO time_slot (time_id, def_rout_id, day_id, teacher_id, subject_id, start_time, end_time, type) VALUES ('"+ i+++ "','076BEIA','2','SS','CT603','10:15:00','11:55:00','Lecture/Tutorial')");
    pool.query("INSERT INTO time_slot (time_id, def_rout_id, day_id, teacher_id, subject_id, start_time, end_time, type) VALUES ('"+ i+++ "','076BEIA','2','BS','CT610','12:45:00','14:25:00','Lecture')");
    pool.query("INSERT INTO time_slot (time_id, def_rout_id, day_id, teacher_id, subject_id, start_time, end_time, type) VALUES ('"+ i+++ "','076BEIA','2','SS','CT603','14:25:00','16:55:00','Practical')");

    //WEDNESDAY
    pool.query("INSERT INTO time_slot (time_id, def_rout_id, day_id, teacher_id, subject_id, start_time, end_time, type) VALUES ('"+ i+++ "','076BEIA','3','SS','CT603','10:15:00','11:55:00','Lecture')");
    pool.query("INSERT INTO time_slot (time_id, def_rout_id, day_id, teacher_id, subject_id, start_time, end_time, type) VALUES ('"+ i+++ "','076BEIA','3','BS','CT610','12:45:00','14:25:00','Lecture')");
    pool.query("INSERT INTO time_slot (time_id, def_rout_id, day_id, teacher_id, subject_id, start_time, end_time, type) VALUES ('"+ i+++ "','076BEIA','3','BRD','CT613','14:25:00','16:05:00','Lecture/Tutorial')");

    //THURSDAY
    pool.query("INSERT INTO time_slot (time_id, def_rout_id, day_id, teacher_id, subject_id, start_time, end_time, type) VALUES ('"+ i+++ "','076BEIA','4','BS','CT610','10:15:00','12:45:00','Practical')");
    pool.query("INSERT INTO time_slot (time_id, def_rout_id, day_id, teacher_id, subject_id, start_time, end_time, type) VALUES ('"+ i+++ "','076BEIA','4','RK','CE615','12:45:00','14:25:00','Lecture')");
    pool.query("INSERT INTO time_slot (time_id, def_rout_id, day_id, teacher_id, subject_id, start_time, end_time, type) VALUES ('"+ i+++ "','076BEIA','4','PR','EX605','15:15:00','16:55:00','Lecture/Tutorial')");

    //FRIDAY
    pool.query("INSERT INTO time_slot (time_id, def_rout_id, day_id, teacher_id, subject_id, start_time, end_time, type) VALUES ('"+ i+++ "','076BEIA','5','BRD','CT613','10:15:00','12:45:00','Practical')");
    pool.query("INSERT INTO time_slot (time_id, def_rout_id, day_id, teacher_id, subject_id, start_time, end_time, type) VALUES ('"+ i+++ "','076BEIA','5','BRD','CT613','13:35:00','15:15:00','Lecture')");
    pool.query("INSERT INTO time_slot (time_id, def_rout_id, day_id, teacher_id, subject_id, start_time, end_time, type) VALUES ('"+ i+++ "','076BEIA','5','AV','CT612','15:15:00','16:55:00','Lecture')");

    //GROUP B
    //SUNDAY
    pool.query("INSERT INTO time_slot (time_id, def_rout_id, day_id, teacher_id, subject_id, start_time, end_time, type) VALUES ('"+ i+++ "','076BEIB','0','RK','CE615','10:15:00','11:55:00','Lecture/Tutorial')");
    pool.query("INSERT INTO time_slot (time_id, def_rout_id, day_id, teacher_id, subject_id, start_time, end_time, type) VALUES ('"+ i+++ "','076BEIB','0','PR','EX605','15:15:00','16:55:00','Lecture')");

    //MONDAY
    pool.query("INSERT INTO time_slot (time_id, def_rout_id, day_id, teacher_id, subject_id, start_time, end_time, type) VALUES ('"+ i+++ "','076BEIB','1','AV','CT612','12:45:00','15:15:00','Lecture/Tutorial')");
    pool.query("INSERT INTO time_slot (time_id, def_rout_id, day_id, teacher_id, subject_id, start_time, end_time, type) VALUES ('"+ i+++ "','076BEIB','1','PR','EX605','15:15:00','16:55:00','Practical')");
    pool.query("INSERT INTO time_slot (time_id, def_rout_id, day_id, teacher_id, subject_id, start_time, end_time, type) VALUES ('"+ i+++ "','076BEIB','1','AV','CT612','15:15:00','16:55:00','Practical')");

    //TUESDAY
    pool.query("INSERT INTO time_slot (time_id, def_rout_id, day_id, teacher_id, subject_id, start_time, end_time, type) VALUES ('"+ i+++ "','076BEIB','2','SS','CT603','10:15:00','11:55:00','Lecture/Tutorial')");
    pool.query("INSERT INTO time_slot (time_id, def_rout_id, day_id, teacher_id, subject_id, start_time, end_time, type) VALUES ('"+ i+++ "','076BEIB','2','BS','CT610','12:45:00','14:25:00','Lecture')");
    pool.query("INSERT INTO time_slot (time_id, def_rout_id, day_id, teacher_id, subject_id, start_time, end_time, type) VALUES ('"+ i+++ "','076BEIB','2','SS','CT603','14:25:00','16:55:00','Practical')");

    //WEDNESDAY
    pool.query("INSERT INTO time_slot (time_id, def_rout_id, day_id, teacher_id, subject_id, start_time, end_time, type) VALUES ('"+ i+++ "','076BEIB','3','SS','CT603','10:15:00','11:55:00','Lecture')");
    pool.query("INSERT INTO time_slot (time_id, def_rout_id, day_id, teacher_id, subject_id, start_time, end_time, type) VALUES ('"+ i+++ "','076BEIB','3','BS','CT610','12:45:00','14:25:00','Lecture')");
    pool.query("INSERT INTO time_slot (time_id, def_rout_id, day_id, teacher_id, subject_id, start_time, end_time, type) VALUES ('"+ i+++ "','076BEIB','3','BRD','CT613','14:25:00','16:05:00','Lecture/Tutorial')");

    //THURSDAY
    pool.query("INSERT INTO time_slot (time_id, def_rout_id, day_id, teacher_id, subject_id, start_time, end_time, type) VALUES ('"+ i+++ "','076BEIB','4','BRD','CT613','10:15:00','12:45:00','Practical')");
    pool.query("INSERT INTO time_slot (time_id, def_rout_id, day_id, teacher_id, subject_id, start_time, end_time, type) VALUES ('"+ i+++ "','076BEIB','4','RK','CE615','12:45:00','14:25:00','Lecture')");
    pool.query("INSERT INTO time_slot (time_id, def_rout_id, day_id, teacher_id, subject_id, start_time, end_time, type) VALUES ('"+ i+++ "','076BEIB','4','PR','EX605','15:15:00','16:55:00','Lecture/Tutorial')");

    //FRIDAY
    pool.query("INSERT INTO time_slot (time_id, def_rout_id, day_id, teacher_id, subject_id, start_time, end_time, type) VALUES ('"+ i+++ "','076BEIB','5','BS','CT610','10:15:00','12:45:00','Practical')");
    pool.query("INSERT INTO time_slot (time_id, def_rout_id, day_id, teacher_id, subject_id, start_time, end_time, type) VALUES ('"+ i+++ "','076BEIB','5','BRD','CT613','13:35:00','15:15:00','Lecture')");
    pool.query("INSERT INTO time_slot (time_id, def_rout_id, day_id, teacher_id, subject_id, start_time, end_time, type) VALUES ('"+ i+++ "','076BEIB','5','AV','CT612','15:15:00','16:55:00','Lecture')");
}
add_batch_id();
add_teacher();
add_subject();
add_def_rout();
setTimeout(add_student,700);
setTimeout(add_lesson,700);
setTimeout(add_day, 700);
setTimeout(add_time_slot, 1000);
