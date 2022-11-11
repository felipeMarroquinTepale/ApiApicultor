const bd = require("../../configMysql");

module.exports = {

    consultActivity : (id_hives,callback) =>{
        let sql = 'SELECT * FROM activity WHERE id_hives = ?'
        bd.query(sql,id_hives, (err, data) => {
            if (err) throw err
            if (data.length>0)
                callback(data)
            else
                callback(null)
        })
    },
    insertActivity: (activity,callback)=>{
        let sql = 'INSERT INTO activity SET ?'
        bd.query(sql,activity,(err,data)=>{
            if(err)
                //Si hay error entonces la isnsercion no fue exitosa
                //en vez de tronar retorno un null
                return callback(null)
            else
                //Hay un data y lo retornamos
                return callback(data)
        })
    },

    deleteActivity: (id_activity,callback)=>{
        let sql = 'DELETE FROM activity WHERE id_activity = ?'
        bd.query(sql,id_activity,(err,data)=>{
            if(err)
                //Si hay error entonces la insercion no fue exitosa
                //en vez de tronar retorno un null
                return callback(null)
            else
                //Hay un data y lo retornamos
                return callback(data)
        })
    },

    updateActivity:(activity,callback)=>{
        const datoactivity = [activity.name,activity.description,activity.finish_date,activity.id_hives,activity.id_activity]
        let sql = ('UPDATE hives SET name = ?,description = ?,state = ?,finish_date= ?,id_hives= ? WHERE id_activity= ?');

        //let sql = 'UPDATE beekeeper SET ? WHERE id_beekeeper = ?'
        bd.query(sql,datoactivity,(err,data)=>{
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