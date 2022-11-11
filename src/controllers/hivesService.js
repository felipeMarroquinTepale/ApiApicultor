const hiveDao = require("../models/HiveDAO")

const insertHives=(req, res)=>{
    console.log("Insertando colmena")
    const hive= {
        id_hives: req.body.id_hives,
        name: req.body.name,
        cant_backstage: req.body.cant_backstage,
        state:req.body.state,
        date_register: req.body.date_register,
        id_apiary: req.body.id_apiary,
    }
    hiveDao.insertHive(hive,(data)=>{
        if (data && data.affectedRows ===1){
            res.send({
                status:true,
                message: 'datos insertados exitosamente'
            })
        }else {
            res.send({
                status: false,
                message: 'Ocurrio un problema al insertar los datos'
            })
        }
    })
}
const consultHives = (req, res) =>{
    console.log("Obteniendo datos de la colmenas")
    const id_apiary = req.body.id_apiary
    hiveDao.consultHive(id_apiary,(data)=>{
        if ( data != null){
            res.send({
                status: true,
                data: data
            })
        }else {
            res.send({
                status: false,
                message: "Ningun dato"
            })
        }
    })
}

const deleteHive = (req, res) =>{
    console.log("Eliminando colmena")
    const id_hives = req.body.id_hives
    hiveDao.deleteHive(id_hives,(data)=>{
        if (data && data.affectedRows ===1){
            res.send({
                status:true,
                message: 'colmena eliminada exitosamente'
            })
        }else {
            res.send({
                status: false,
                message: 'Ocurrio un problema al eliminar los datos'
            })
        }
    })
}

const updateHive = (req, res) =>{
    console.log("actualizando  colemna")

    const hive= {
        id_hives: req.body.id_hives,
        name: req.body.name,
        cant_backstage: req.body.cant_backstage,
        state:req.body.state,
        date_register: req.body.date_register,
        id_apiary: req.body.id_apiary,
    }

    hiveDao.updateHive(hive,(data)=>{
        if (data && data.affectedRows ===1){
            res.send({
                status:true,
                message: 'colmenas actualizado exitosamente'
            })
        }else {
            res.send({
                status: false,
                message: 'Ocurrio un problema al actualizar los datos'
            })
        }
    })
}
module.exports = {
    consultHives,
    insertHives,
    deleteHive,
    updateHive
}