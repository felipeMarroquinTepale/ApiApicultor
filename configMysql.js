const mysql = require('mysql2');

const config = {
    host: 'db-apibeekepeer.cdqxvmj3d7xx.us-east-1.rds.amazonaws.com',
    user: 'admin',
    database:'apiBeekepeer',
    password: 'datamin3',

};

const conn = mysql.createConnection(config);

conn.connect(function(err) {
    if (err) {
        console.log('¡Ups!... parece que algo salio mal :c')
        throw err;
    }else{
        console.log('Conexión a la base de datos exitosa!');
    }
});

module.exports = conn;