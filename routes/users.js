const express =require("express");
const router = express.Router();
const passport = require("passport");

const usersController = require('../controllers/users_controller');

router.get('/profile',passport.checkAuthentication,usersController.profile);

router.get('/mentor_profile',passport.checkAuthentication,usersController.mentorProfile);

router.get('/sign-up',usersController.signUp);

router.get('/sign-in',usersController.signIn);
router.get('/tutor',usersController.tutor);
router.get('/detail',usersController.detail);

router.get('/test-rules',usersController.testRules);
router.post('/create',usersController.create);

router.get('/mentor-info',passport.checkAuthentication,usersController.showInfo);

router.post('/verify-mentor',usersController.verifyMentor);

router.post('/remove-interest',usersController.removeInterest);
// use passport as a middleware to authenticate
router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in'}
),usersController.createSession);




router.get('/sign-out',usersController.destroySession);



module.exports = router;