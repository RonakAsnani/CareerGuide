const User = require('../models/users');

module.exports.webTest = function(req,res){
    return res.render('mentor-web-test',{
        title: "test"
    })
}


