const mysql = require('mysql2');

const config = {
    host: '3.226.164.94',
    user: 'felipemarroquin',
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