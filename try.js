const { Client }= require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'undebunkable',
    password: 'asdf',
    port: 5432,
})

client.connect();

client.query('SELECT * FROM person', (err, res) => {
    if(!err) {
        console.log(res.rows[0]['gender']);
    }
    else {
        console.log(err);
    }
    client.end();
})