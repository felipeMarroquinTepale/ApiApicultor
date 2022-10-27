const mysql = require('mysql');

const config = {
    host: 'localhost',
    user: 'root',
    database:'apiBeekepeer',
    password: 'datamin3',

    multipleStatements: true
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