const activityDao = require("../models/activityDAO")

const insertActivity=(req, res)=>{
    console.log("Insertando actividad en la colmena")
    const activity= {
        name_activity: req.body.name_activity,
        description_act: req.body.description_act,
        finish_date: req.body.finish_date,
        id_hives: req.body.id_hives
    }
    activityDao.insertActivity(activity,(data)=>{
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
const consultActivity = (req, res) =>{
    console.log("Obteniendo datos de la actividad de la colmenas")
    const id_hives = req.body.id_hives;
    activityDao.consultActivity(id_hives,(data)=>{
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

const deleteActivity = (req, res) =>{
    console.log("Eliminando actividad de la colmena")
    const id_activity = req.body.id_activity
    activityDao.deleteActivity(id_activity,(data)=>{
        if (data && data.affectedRows ===1){
            res.send({
                status:true,
                message: 'actividad de la colmena eliminada exitosamente'
            })
        }else {
            res.send({
                status: false,
                message: 'Ocurrio un problema al eliminar los datos'
            })
        }
    })
}

const updateActivity = (req, res) =>{
    console.log("actualizando actividad de la colemna")

    const activity= {
        id_activity: req.body.id_activity,
        name_activity: req.body.name_activity,
        description_act: req.body.description_act,
        finish_date: req.body.finish_date,
        id_hives: req.body.id_hives
    }
    activityDao.updateActivity(activity,(data)=>{
        if (data && data.affectedRows ===1){
            res.send({
                status:true,
                message: 'actividad de la colmena actualizado exitosamente'
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
    consultActivity,
    insertActivity,
    deleteActivity,
    updateActivity
}