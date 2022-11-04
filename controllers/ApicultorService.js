const ApicultorDao = require("../models/ApicultorDAO")

const insertApicultor=(req, res)=>{
    console.log("Insertando apicultor")
    const beekeeper = {
        id_beekeeper: req.body.id_beekeeper,
        name: req.body.name,
        lastname: req.body.lastname,
        user:req.body.user,
        password: req.body.password,
        email: req.body.email,
        phone: req.body.phone,
    }
    ApicultorDao.insertApicultor(beekeeper,(data)=>{
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

const consultApicultor = (req, res) =>{
    console.log("Obteniendo datos de los apicultores")
    ApicultorDao.consultApicultor((data)=>{
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

const deleteApicultor = (req, res) =>{
    console.log("Eliminando apicultor")
    const id_beekeeper = req.body.id_beekeeper;
    ApicultorDao.deleteApicultor(id_beekeeper,(data)=>{
        if (data && data.affectedRows ===1){
            res.send({
                status:true,
                message: 'apicultor eliminado exitosamente'
            })
        }else {
            res.send({
                status: false,
                message: 'Ocurrio un problema al eliminar los datos'
            })
        }
    })
}

const updateApicultor = (req, res) =>{
    console.log("actualizando apicultor")

    const beekeeper = {
        id_beekeeper: req.body.id_beekeeper,
        name: req.body.name,
        lastname: req.body.lastname,
        user:req.body.user,
        password: req.body.password,
        email: req.body.email,
        phone: req.body.phone,
    }
    ApicultorDao.updateApicultor(beekeeper,(data)=>{
        if (data && data.affectedRows ===1){
            res.send({
                status:true,
                message: 'apicultor actualizado exitosamente'
            })
        }else {
            res.send({
                status: false,
                message: 'Ocurrio un problema al actualizar los datos'
            })
        }
    })
}

const consultAllContentApicultor = (req, res) =>{
    console.log("Obteniendo contenido de los datos de los apicultores")
    ApicultorDao.consultAllContentApicultor((data)=>{
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

const consultContentApicultor = (req, res) =>{
    const id_beekeeper = req.body.id_beekeeper;
    console.log("Obteniendo contenido de los datos de un apicultor")
    ApicultorDao.consultContentApicultor(id_beekeeper,(data)=>{
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

module.exports = {
    consultApicultor,
    insertApicultor,
    deleteApicultor,
    updateApicultor,
    consultAllContentApicultor,
    consultContentApicultor
}