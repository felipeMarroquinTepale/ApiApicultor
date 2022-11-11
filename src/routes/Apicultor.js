var express = require('express');
var router = express.Router();
const apicultorService = require("../controllers/ApicultorService");
const apiarioService = require("../controllers/ApiarioService");
const hivesService = require("../controllers/hivesService");
const sickService = require("../controllers/sickService");
const activityService = require("../controllers/activityService");



//route para gestion de apicultor
router.get('/getallContentApicultor',apicultorService.consultContentApicultor);
router.post('/usernameValidate',apicultorService.usernameValidate);
router.post('/registerApicultor',apicultorService.insertApicultor);
router.delete('/deleteApicultor',apicultorService.deleteApicultor);
router.put('/updateApicultor',apicultorService.updateApicultor);

//route para gestion de apiarios
router.get('/getallApiario',apiarioService.consultApiario);
router.post('/registerApiario',apiarioService.insertApiario);
router.delete('/deleteApiario',apiarioService.deleteApiario);
router.put('/updateApiario',apiarioService.updateApiario);

//route para gestion de colmenas
router.get('/getallColmena',hivesService.consultHives);
router.post('/registerColmena',hivesService.insertHives);
router.delete('/deleteColmena',hivesService.deleteHive);
router.put('/updateColmena',hivesService.updateHive);

//route para gestion de enfermedadeds
router.get('/getallSick',sickService.consultSick);
router.post('/registerSick',sickService.insertSick);
router.delete('/deleteSick',sickService.deleteSick);
router.put('/updateSick',sickService.updateSick);


//route para gestion de actividades
router.get('/getallActividades',activityService.consultActivity);
router.post('/registerActividades',activityService.insertActivity);
router.delete('/deleteActividades',activityService.deleteActivity);
router.put('/updateActividades',activityService.updateActivity);

module.exports = router;