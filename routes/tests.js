const express =require("express");
const router = express.Router();
const passport = require("passport");

const testController = require("../controllers/tests_controller");

router.get('/web-development',passport.checkAuthentication,testController.webTest);

router.get('/app-development',passport.checkAuthentication,testController.appTest);
router.get('/competitive',passport.checkAuthentication,testController.compTest);
router.get('/data-analytics',passport.checkAuthentication,testController.dataTest);
router.get('/finance',passport.checkAuthentication,testController.financeTest);
router.get('/machine-learning',passport.checkAuthentication,testController.mlTest);
router.get('/music',passport.checkAuthentication,testController.musicTest);
router.get('/mba',passport.checkAuthentication,testController.mbaTest);
module.exports = router;
