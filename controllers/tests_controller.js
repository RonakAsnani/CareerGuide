const User = require('../models/users');

module.exports.webTest = function(req,res){
    return res.render('mentor-web-test',{
        title: "test"
    })
}

module.exports.appTest = function(req,res){
    return res.render('mentor-app-test',{
        title: "test"
    })
}
module.exports.compTest = function(req,res){
    return res.render('mentor-comp-test',{
        title: "test"
    })
}
module.exports.dataTest = function(req,res){
    return res.render('mentor-data-test',{
        title: "test"
    })
}
module.exports.mlTest = function(req,res){
    return res.render('mentor-ml-test',{
        title: "test"
    })
}
module.exports.mbaTest = function(req,res){
    return res.render('mentor-mba-test',{
        title: "test"
    })
}
module.exports.financeTest = function(req,res){
    return res.render('mentor-finance-test',{
        title: "test"
    })
}
module.exports.musicTest = function(req,res){
    return res.render('mentor-music-test',{
        title: "test"
    })
}


