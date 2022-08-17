const { Pool }= require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'undebunkable',
    password: 'asdf',
    port: 5432,
})
pool.query("DROP TABLE IF EXISTS student,batch_dep,teacher,subject,lesson,default_rout,day", (err, res) => {
    if(err) {
        console.log(err);
    }
    pool.end();
});