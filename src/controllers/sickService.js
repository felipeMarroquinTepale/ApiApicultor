const sickDao = require("../models/sickDAO")

const insertSick=(req, res)=>{
    console.log("Insertando enfermedad en la  colmena")
    const sick= {
        name_sick: req.body.name_sick,
        description_sick: req.body.description_sick,
        treatment:req.body.treatment,
        id_hives: req.body.id_hives,
    }
    sickDao.insertSick(sick,(data)=>{
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
const consultSick = (req, res) =>{
    const id_hives = req.body.id_hives
    console.log("Obteniendo datos de la enfermedad de la colmena")
    sickDao.consultSick(id_hives,(data)=>{
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

const deleteSick = (req, res) =>{
    console.log("Eliminando enfermedad de la colmena")
    const id_sick= req.body.id_sick
    sickDao.deleteSick(id_sick,(data)=>{
        if (data && data.affectedRows ===1){
            res.send({
                status:true,
                message: 'enfermadad de la colmena eliminada exitosamente'
            })
        }else {
            res.send({
                status: false,
                message: 'Ocurrio un problema al eliminar los datos'
            })
        }
    })
}

const updateSick = (req, res) =>{
    console.log("actualizando enfermedad de la colemna")

    const sick= {
        id_sick: req.body.id_sick,
        name_sick: req.body.name_sick,
        description_sick: req.body.description_sick,
        treatment:req.body.treatment,
        id_hives: req.body.id_hives,
    }

    sickDao.updateSick(sick,(data)=>{
        if (data && data.affectedRows ===1){
            res.send({
                status:true,
                message: 'enfermedad de la colmena actualizado exitosamente'
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
    consultSick,
    insertSick,
    deleteSick,
    updateSick
}