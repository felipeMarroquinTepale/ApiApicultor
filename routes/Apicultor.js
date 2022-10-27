var express = require('express');
var router = express.Router();
const apicultorService = require("../controllers/ApicultorService");
const apiarioService = require("../controllers/ApiarioService");
const hivesService = require("../controllers/hivesService");



//route para gestion de apicultor
router.get('/getallApicultores',apicultorService.consultApicultor);
router.post('/registerApicultor',apicultorService.insertApicultor);
router.delete('/deleteApicultor',apicultorService.deleteApicultor);
router.put('/updateApicultor',apicultorService.updateApicultor);

//route para gestion de apiarios
router.get('/getallApiarios',apiarioService.consultApiario);
router.post('/registerApiario',apiarioService.insertApiario);
router.delete('/deleteApiario',apiarioService.deleteApiario);
router.put('/updateApiario',apiarioService.updateApiario);

//route para gestion de colmenas
router.get('/getallColmenas',hivesService.consultHives);
router.post('/registerColmena',hivesService.insertHives);
router.delete('/deleteColmena',hivesService.deleteHive);
router.put('/updateColmena',hivesService.updateHive);



module.exports = router;
