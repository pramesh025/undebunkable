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
    pool.query("INSERT INTO default_rout (def_rout_id) VALUES ('076BEIAB')");
}

function add_day(){
    pool.query("INSERT INTO day (day_id, def_rout_id,name) VALUES ('0','076BEIAB','sunday')");
    pool.query("INSERT INTO day (day_id, def_rout_id,name) VALUES ('1','076BEIAB','monday')");
    pool.query("INSERT INTO day (day_id, def_rout_id,name) VALUES ('2','076BEIAB','tuesday')");
    pool.query("INSERT INTO day (day_id, def_rout_id,name) VALUES ('3','076BEIAB','wednesday')");
    pool.query("INSERT INTO day (day_id, def_rout_id,name) VALUES ('4','076BEIAB','thursday')");
    pool.query("INSERT INTO day (day_id, def_rout_id,name) VALUES ('5','076BEIAB','friday')");
    pool.query("INSERT INTO day (day_id, def_rout_id,name) VALUES ('6','076BEIAB','saturday')");
}
function add_time_slot(){
    let i = 0;
    pool.query("INSERT INTO time_slot (time_id, day_id, start_time, end_time, type) VALUES ("+toString(i++)+",'0','08:00:00','09:00:00')");
}
add_batch_id();
add_teacher();
add_subject();
add_def_rout();
setTimeout(add_student,700);
setTimeout(add_lesson,700);
setTimeout(add_day, 700);
