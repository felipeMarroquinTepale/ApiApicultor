const bd = require("../configMysql");

module.exports = {

    consultApicultor : (callback) =>{
        let sql = 'SELECT * FROM beekeeper'
        bd.query(sql, (err, data) => {
            if (err) throw err
            if (data.length>0)
                callback(data)
            else
                callback(null)
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

    consultAllContentApicultor : (callback) =>{
        let sql = 'SELECT name_beekeeper,lastname,name_apiary,location,description,date_register,name_hives,state, date_register_H,name_activity,description_act,finish_date,name_sick,description_sick,treatment FROM beekeeper beek\n' +
            'INNER JOIN apiary apiary ON apiary.id_beekeeper = beek.id_beekeeper\n' +
            'INNER JOIN hives h ON h.id_apiary = apiary.id_apiary\n' +
            'INNER JOIN activity ac ON ac.id_hives = h.id_hives\n' +
            'INNER JOIN sick sick ON sick.id_hives = h.id_hives;'

        bd.query(sql, (err, data) => {
            if (err) throw err
            if (data.length>0)
                callback(data)
            else
                callback(null)
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
       const recor = [beekeeper.name,beekeeper.lastname,beekeeper.user,beekeeper.password,beekeeper.email,beekeeper.phone,beekeeper.id_beekeeper]
       let sql = ('UPDATE beekeeper SET name = ?,lastname = ?,user = ?,password= ?,email= ?,phone= ? WHERE id_beekeeper= ?');

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