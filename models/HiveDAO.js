const bd = require("../configMysql");

module.exports = {

    consultHive : (callback) =>{
        let sql = 'SELECT * FROM hives'
        bd.query(sql, (err, data) => {
            if (err) throw err
            if (data.length>0)
                callback(data)
            else
                callback(null)
        })
    },
    insertHive: (hive,callback)=>{
        let sql = 'INSERT INTO hives SET ?'
        bd.query(sql,hive,(err,data)=>{
            if(err)
                //Si hay error entonces la isnsercion no fue exitosa
                //en vez de tronar retorno un null
                return callback(null)
            else
                //Hay un data y lo retornamos
                return callback(data)
        })
    },

    deleteHive: (id_hives,callback)=>{
        let sql = 'DELETE FROM hives WHERE id_hives = ?'
        bd.query(sql,id_hives,(err,data)=>{
            if(err)
                //Si hay error entonces la insercion no fue exitosa
                //en vez de tronar retorno un null
                return callback(null)
            else
                //Hay un data y lo retornamos
                return callback(data)
        })
    },

    updateHive:(hive,callback)=>{
        const datoshive = [hive.name,hive.cant_backstage,hive.state,hive.date_register,hive.id_apiary,hive.id_hives]
        let sql = ('UPDATE hives SET name = ?,cant_backstage = ?,state = ?,date_register= ?,id_apiary= ? WHERE id_hives= ?');

        //let sql = 'UPDATE beekeeper SET ? WHERE id_beekeeper = ?'
        bd.query(sql,datoshive,(err,data)=>{
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