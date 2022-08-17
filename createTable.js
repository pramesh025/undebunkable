const { Pool }= require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'undebunkable',
    password: 'asdf',
    port: 5432,
})


function createTable(){
    pool.query("CREATE TABLE student (std_id INT PRIMARY KEY, name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, is_CR BOOLEAN NOT NULL, password VARCHAR(255) NOT NULL, batch_id VARCHAR(255) NOT NULL)",(err, res) => {
        if(err) {
            console.log(err);
        }
        // pool.end();
    });
    pool.query("CREATE TABLE batch_dep (batch_id VARCHAR(255) PRIMARY KEY, section VARCHAR(1),def_rout_id VARCHAR(255))",(err, res) => {
        if(err) {
            console.log(err);
        }
        // pool.end();
    });
    pool.query("CREATE TABLE teacher (teacher_id INT PRIMARY KEY, name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL)",(err, res) => {
        if(err) {
            console.log(err);
        }
        // pool.end();
    });
    pool.query("CREATE TABLE subject (subject_id INT PRIMARY KEY, name VARCHAR(255) NOT NULL)",(err, res) => {
        if(err) {
            console.log(err);
        }
        // pool.end();
    });
    pool.query("CREATE TABLE default_rout (def_rout_id VARCHAR(255) PRIMARY KEY)",(err, res) => {
        if(err) {
            console.log(err);
        }
        // pool.end();
    });
    pool.query("CREATE TABLE day (day_id INT PRIMARY KEY, def_rout_id VARCHAR(255))",(err, res) => {
        if(err) {
            console.log(err);
        }
        // pool.end();
    });
    pool.query("CREATE TABLE time_slot (time_id INT PRIMARY KEY, start_time INT, end_time INT, type VARCHAR(50), day_id INT)",(err, res) => {
        if(err) {
            console.log(err);
        }
        // pool.end();
    });
    pool.query("CREATE TABLE changes(change_id INT PRIMARY KEY, date DATE,def_rout_id VARCHAR(255), day_id INT, time_id INT)",(err, res) => {
        if(err) {
            console.log(err);
        }
        // pool.end();
    });
    
}

function alter(){
    pool.query("ALTER TABLE student ADD FOREIGN KEY(batch_id) REFERENCES batch_dep(batch_id)",(err, res) => {
        if(err) {
            console.log(err);
        }
        // pool.end();
    });
    pool.query("ALTER TABLE batch_dep ADD FOREIGN KEY(def_rout_id) REFERENCES default_rout(def_rout_id)",(err, res) => {
        if(err) {
            console.log(err);
        }
        // pool.end();
    });
    pool.query("CREATE TABLE lesson (subject_id INT NOT NULL, teacher_id INT NOT NULL, FOREIGN KEY (subject_id) REFERENCES subject(subject_id), FOREIGN KEY (teacher_id) REFERENCES teacher(teacher_id))",(err, res) => {
        if(err) {
            console.log(err);
        }
        // pool.end(); 
    });
    pool.query("ALTER TABLE day ADD FOREIGN KEY(def_rout_id) REFERENCES default_rout(def_rout_id)",(err, res) => {
        if(err) {
            console.log(err);
        }
        // pool.end();
    });
    pool.query("ALTER TABLE time_slot ADD FOREIGN KEY (day_id) REFERENCES day(day_id)",(err, res) => {
        if(err) {
            console.log(err);
        }
        // pool.end();
    });
    pool.query("ALTER TABLE changes ADD FOREIGN KEY (day_id) REFERENCES day(day_id)",(err, res) => {
        if(err) {
            console.log(err);
        }
        // pool.end();
    });
    pool.query("ALTER TABLE changes ADD FOREIGN KEY(def_rout_id) REFERENCES default_rout(def_rout_id)",(err, res) => {
        if(err) {
            console.log(err);
        }
        // pool.end();
    });
    pool.query("ALTER TABLE changes ADD FOREIGN KEY (time_id) REFERENCES time_slot(time_id)",(err, res) => {
        if(err) {
            console.log(err);
        }
        // pool.end();
    });
}


createTable();
setTimeout(alter,7000);









