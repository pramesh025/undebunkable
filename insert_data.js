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
}

function insert_student_data(){
    var std_id = prompt("Enter Student ID (eg. 076BEI001):");
    var name = prompt("Enter Student Name (eg. Richard Sandwitch):");
    var email = prompt("Enter Student Email(eg. therealsandwitch@gmail.com):");
    var is_CR = prompt("Enter Student is_CR:(eg. true or false)");
    var password = prompt("Enter Student Password:");
    var batch_id = prompt("Enter Student Batch ID:(eg. 076BEIA)");
    var section = prompt("Enter Student Section:(A/B/C/D)");
    if(prompt("confirm insert (y/n)") == "y"){
        console.log("Inserting Student Data...");
        pool.query("INSERT INTO student (std_id, name, email, is_CR, password, batch_id, section) VALUES ($1, $2, $3, $4, $5, $6, $7)",[std_id, name, email, is_CR, password, batch_id, section],(err, res) => {
            if(err) {
                console.log(err);
            }
            // pool.end();
        });
    }
}

insert_student_data();
