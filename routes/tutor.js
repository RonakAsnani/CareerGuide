const express =require("express");
const router = express.Router();
const tutorController=require('../controllers/tutor_controller');

router.get('/start',tutorController.start);
router.get('/webDev',tutorController.webDev);
router.get('/appDev',tutorController.appDev);
router.get('/competitve',tutorController.competitve);
router.get('/ml',tutorController.ml);
router.get('/data',tutorController.data);
router.get('/mba',tutorController.mba);
router.get('/finance',tutorController.finance);
router.get('/music',tutorController.music);


module.exports = router;