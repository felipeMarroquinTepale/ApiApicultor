const ApiarioDao = require("../models/ApiarioDAO")

const insertApiario=(req, res)=>{
    console.log("Insertando apiario")
    const apiary = {
        name_apiary: req.body.name_apiary,
        location: req.body.location,
        description:req.body.description,
        cant_hives: req.body.cant_hives,
        date_register: req.body.date_register,
        id_beekeeper: req.body.id_beekeeper,
    }
    ApiarioDao.insertApiario(apiary,(data)=>{
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
const consultApiario = (req, res) =>{
    const id_beekeeper = req.body.id_beekeeper;
    console.log("Obteniendo datos del apiario")
    ApiarioDao.consultApiario(id_beekeeper,(data)=>{
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

const deleteApiario = (req, res) =>{
    console.log("Eliminando apiario")
    const id_apiary = req.body.id_apiary
    ApiarioDao.deleteApiario(id_apiary,(data)=>{
        if (data && data.affectedRows ===1){
            res.send({
                status:true,
                message: 'apiary eliminado exitosamente'
            })
        }else {
            res.send({
                status: false,
                message: 'Ocurrio un problema al eliminar los datos'
            })
        }
    })
}

const updateApiario = (req, res) =>{
    console.log("actualizando apiario")
    const apiary = {
        id_apiary: req.body.id_apiary,
        name_apiary: req.body.name_apiary,
        location: req.body.location,
        description:req.body.description,
        cant_hives: req.body.cant_hives,
        date_register: req.body.date_register,
        id_beekeeper: req.body.id_beekeeper,
    }

    ApiarioDao.updateApiario(apiary,(data)=>{
        if (data && data.affectedRows ===1){
            res.send({
                status:true,
                message: 'apiario actualizado exitosamente'
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
    consultApiario,
    insertApiario,
    deleteApiario,
    updateApiario
}