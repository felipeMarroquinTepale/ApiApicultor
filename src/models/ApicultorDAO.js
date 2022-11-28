const bd = require("../../configMysql");
const bcrypt = require("bcrypt");

module.exports = {

    findByUsername: (user, password, callback) => {
        //retorna el valor de la consulta con la funcion callback
        let sql = 'SELECT user,password FROM beekeeper WHERE user=? '
        bd.query(sql, [user], (err, data) => {

            if (err) throw err //obtenemos error por si algo salio mal en la consulta
            bcrypt.compare(password, data[0].password, (err, resp) => {         /*Comparamos la contraseña hasheada con la contraseña del login */

                if (resp === true) {
                    callback(data[0])
                } else {
                    callback(null)
                }
            })
        })
    },

   insertApicultor: (beekeeper,callback)=>{
        let sql = 'INSERT INTO beekeeper SET ?'
        bd.query(sql,beekeeper,(err,data)=>{
            if(err)
                //Si hay error entonces la insercion no fue exitosa
                //en vez de tronar retorno un null
                return callback(null)
            else
                //Hay un data y lo retornamos
                return callback(data)
        })
    },

    deleteApicultor: (id_beekeeper,callback)=>{

        let sql = 'DELETE FROM beekeeper WHERE id_beekeeper = ?'
        bd.query(sql,id_beekeeper,(err,data)=>{
            if(err)
                //Si hay error entonces la insercion no fue exitosa
                //en vez de tronar retorno un null
                return callback(null)
            else
                //Hay un data y lo retornamos
                return callback(data)
        })
    },

    consultContentApicultor : (id_beekeeper,callback) =>{
        let sql = 'SELECT name_beekeeper,lastname,name_apiary,location,description,date_register,name_hives,state, date_register_H,name_activity,description_act,finish_date,name_sick,description_sick,treatment FROM beekeeper beek \n' +
            'INNER JOIN apiary apiary ON apiary.id_beekeeper = beek.id_beekeeper\n' +
            'INNER JOIN hives h ON h.id_apiary = apiary.id_apiary\n' +
            'INNER JOIN activity ac ON ac.id_hives = h.id_hives\n' +
            'INNER JOIN sick sick ON sick.id_hives = h.id_hives\n' +
            'WHERE apiary.id_beekeeper = ?';

        bd.query(sql,id_beekeeper,(err, data) => {
            if (err) throw err
            if (data.length>0)
                callback(data)
            else
                callback(null)
        })
    },

    updateApicultor:(beekeeper,callback)=>{
       const recor = [beekeeper.UID_beekeeper,beekeeper.name,beekeeper.lastname,beekeeper.user,beekeeper.password,beekeeper.email,beekeeper.phone,beekeeper.photo_url,beekeeper.id_beekeeper]
       let sql = ('UPDATE beekeeper SET UID_beekeeper=?,name = ?,lastname = ?,user = ?,password= ?,email= ?,phone= ?,photo_url=? WHERE id_beekeeper= ?');

        //let sql = 'UPDATE beekeeper SET ? WHERE id_beekeeper = ?'
        bd.query(sql,recor,(err,data)=>{
            if(err)
                //Si hay error entonces la insercion no fue exitosa
                //en vez de tronar retorno un null
                return callback(null)

            else
                //Hay un data y lo retornamos
                return callback(data)
        })
    },
}