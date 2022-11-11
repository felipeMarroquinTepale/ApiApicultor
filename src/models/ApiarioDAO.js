const bd = require("../../configMysql");

module.exports = {

    consultApiario : (id_beekeeper,callback) =>{
        let sql = 'SELECT * FROM apiary WHERE id_beekeeper = ?'

        bd.query(sql, id_beekeeper, (err, data) => {
            if (err) throw err
            if (data.length>0)
                callback(data)
            else
                callback(null)
        })
    },
    insertApiario: (apiary,callback)=>{
        let sql = 'INSERT INTO apiary SET ?'
        bd.query(sql,apiary,(err,data)=>{
            if(err)
                //Si hay error entonces la isnsercion no fue exitosa
                //en vez de tronar retorno un null
                return callback(null)
            else
                //Hay un data y lo retornamos
                return callback(data)
        })
    },

    deleteApiario: (id_apiary,callback)=>{
        let sql = 'DELETE FROM apiary WHERE id_apiary = ?'
        bd.query(sql,id_apiary,(err,data)=>{
            if(err)
                //Si hay error entonces la insercion no fue exitosa
                //en vez de tronar retorno un null
                return callback(null)
            else
                //Hay un data y lo retornamos
                return callback(data)
        })
    },

    updateApiario:(apiary,callback)=>{
        const datosApiary = [apiary.name,apiary.location,apiary.description,apiary.cant_hives,apiary.date_register,apiary.id_beekeeper,apiary.id_apiary]
        let sql = ('UPDATE apiary SET name = ?,location = ?,description = ?,cant_hives= ?,date_register= ?,id_beekeeper= ? WHERE id_apiary= ?');

        //let sql = 'UPDATE beekeeper SET ? WHERE id_beekeeper = ?'
        bd.query(sql,datosApiary,(err,data)=>{
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