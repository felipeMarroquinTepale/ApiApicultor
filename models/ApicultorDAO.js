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