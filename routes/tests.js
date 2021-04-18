const express =require("express");
const router = express.Router();
const passport = require("passport");

const testController = require("../controllers/tests_controller");

router.get('/web-development',passport.checkAuthentication,testController.webTest);


module.exports = router;
