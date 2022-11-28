const ApicultorDao = require("../models/ApicultorDAO")
const bcrypt = require("bcrypt");



const usernameValidate = (req, res) => {                    //Peticion get   metodo que sirve para el login
    //Mediante findByUsername va a buscar un usuario
    //modelo     metodo        valor enviado
    let user= req.body.user
    let password = req.body.password

    ApicultorDao.findByUsername(user,password ,(data) =>{
        //callback retorna el valor del modelo userDAO

        try {
            //if (data == null) throw new Err("User and password not matching")
            //if data is null generamos una exepcion
            if (!data ) throw new Err("Algo salio mal. si no tiene cuenta cree una nueva")
            console.log('Data===> ',data)
            res.send({   //Enviamos response
                status: true,
                message: 'Datos correctos',
            })
        }
        catch(Err) {  // la exepcion pasa por aca
            res.send({  //enviamos response
                status: false,
                message: 'Datos incorrectos'
            })
        }
    })
}

const insertApicultor=(req, res)=>{
    console.log("Insertando apicultor")
    const beekeeper = {
        UID_beekeeper: req.body.UID_beekeeper,
        name_beekeeper: req.body.name_beekeeper,
        lastname: req.body.lastname,
        user:req.body.user,
        password: bcrypt.hashSync(req.body.password,10), //guardar la contraseña hasheada
        email: req.body.email,
        phone: req.body.phone,
        photo_url: req.body.photo_url
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
        UID_beekeeper: req.body.UID_beekeeper,
        name_beekeeper: req.body.name_beekeeper,
        lastname: req.body.lastname,
        user:req.body.user,
        password: bcrypt.hashSync(req.body.password,10), //guardar la contraseña hasheada
        email: req.body.email,
        phone: req.body.phone,
        photo_url: req.body.photo_url
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
    insertApicultor,
    deleteApicultor,
    updateApicultor,
    consultContentApicultor,
    usernameValidate
}