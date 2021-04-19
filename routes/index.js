const express = require("express");
const router = express.Router();
const homeControl = require('../controllers/home_controller');


router.get('/',homeControl.home);

const aboutController = require('../controllers/about_controller');



router.get('/about',aboutController.about);
const articleControl = require('../controllers/articles_controller');


router.get('/articles',articleControl.articles);

router.use('/users',require('./users'));
router.use('/tutor',require('./tutor'));
router.use('/dashboard',require('./dashboard'));

router.use('/tests',require('./tests'));

const mentorController = require('../controllers/mentor-controller');

router.get('/confirm-mentor',mentorController.mentorConfirm);
router.get('/mentor-fail',mentorController.mentorFail);


module.exports = router;
