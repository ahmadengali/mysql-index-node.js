const express= require('express');
const mysql= require('mysql');

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user:'ahmad',
    password: '123456',
    database:'acme'

});

db.connect();

app.get('/users', (req, res) =>{
    const sql = 'select * from users'; // here we can put all the commands  we used in workbench query sql builder before//
    db.query(sql, (err, result) =>{
        if(err)  throw err;
        res.send(result);
    });
});

app.listen(5000, () => console.log('server started'));