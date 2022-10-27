const bd = require("../configMysql");

module.exports = {

    consultSick : (callback) =>{
        let sql = 'SELECT * FROM sick'
        bd.query(sql, (err, data) => {
            if (err) throw err
            if (data.length>0)
                callback(data)
            else
                callback(null)
        })
    },
    insertSick: (sick,callback)=>{
        let sql = 'INSERT INTO sick SET ?'
        bd.query(sql,sick,(err,data)=>{
            if(err)
                //Si hay error entonces la isnsercion no fue exitosa
                //en vez de tronar retorno un null
                return callback(null)
            else
                //Hay un data y lo retornamos
                return callback(data)
        })
    },

    deleteSick: (id_sick,callback)=>{
        let sql = 'DELETE FROM sick WHERE id_sick = ?'
        bd.query(sql,id_sick,(err,data)=>{
            if(err)
                //Si hay error entonces la insercion no fue exitosa
                //en vez de tronar retorno un null
                return callback(null)
            else
                //Hay un data y lo retornamos
                return callback(data)
        })
    },

    updateSick:(sick,callback)=>{
        const datosick = [sick.name,sick.description,sick.treatment,sick.id_hives,sick.id_sick]
        let sql = ('UPDATE sick SET name = ?,description = ?,treatment = ?,id_hives= ? WHERE id_sick= ?');

        //let sql = 'UPDATE beekeeper SET ? WHERE id_beekeeper = ?'
        bd.query(sql,datosick,(err,data)=>{
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