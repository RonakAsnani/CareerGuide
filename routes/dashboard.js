const express =require("express");
const router = express.Router();
const DashController=require('../controllers/dashboard_controller');

router.get('/start',DashController.start);
router.get('/webDev',DashController.webDev);
router.get('/appDev',DashController.appDev);
router.get('/competitve',DashController.competitve);
router.get('/ml',DashController.ml);
router.get('/data',DashController.data);
router.get('/mba',DashController.mba);
router.get('/finance',DashController.finance);
router.get('/music',DashController.music);


module.exports = router;