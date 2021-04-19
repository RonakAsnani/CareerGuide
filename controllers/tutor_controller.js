const User = require('../models/users');

module.exports.webDev=function(req,res){
    User.find({interest:'web-development'},function(err,users){
        if (err) {
            console.log("Something wrong when updating data!");
        }
        const mentorList = users;
        console.log(mentorList);
        return res.render('dashboard/mentor1',{
            title:'Coding Mentor',
            mentor_list:mentorList
        })

    })
   
}
module.exports.start=function(req,res){
    return res.render('dashboard/mentor_start',{
        title:"Mentor"
    })
   
}
module.exports.appDev=function(req,res){
    User.find({interest:'app-development'},function(err,users){
        if (err) {
            console.log("Something wrong when updating data!");
        }
        const mentorList = users;
        console.log(mentorList);
        return res.render('dashboard/mentor1',{
            title:'Coding Mentor',
            mentor_list:mentorList
        })

    })
}
module.exports.competitve=function(req,res){
    User.find({interest:'competitve'},function(err,users){
        if (err) {
            console.log("Something wrong when updating data!");
        }
        const mentorList = users;
        console.log(mentorList);
        return res.render('dashboard/mentor1',{
            title:'Coding Mentor',
            mentor_list:mentorList
        })

    })
}
module.exports.ml=function(req,res){
    User.find({interest:'machine-learning'},function(err,users){
        if (err) {
            console.log("Something wrong when updating data!");
        }
        const mentorList = users;
        console.log(mentorList);
        return res.render('dashboard/mentor1',{
            title:'Coding Mentor',
            mentor_list:mentorList
        })

    })
}
module.exports.data=function(req,res){
    User.find({interest:'data-analytics'},function(err,users){
        if (err) {
            console.log("Something wrong when updating data!");
        }
        const mentorList = users;
        console.log(mentorList);
        return res.render('dashboard/mentor1',{
            title:'Coding Mentor',
            mentor_list:mentorList
        })

    })
}
module.exports.mba=function(req,res){
    User.find({interest:'mba'},function(err,users){
        if (err) {
            console.log("Something wrong when updating data!");
        }
        const mentorList = users;
        console.log(mentorList);
        return res.render('dashboard/mentor1',{
            title:'Coding Mentor',
            mentor_list:mentorList
        })

    })
}
module.exports.finance=function(req,res){
    User.find({interest:'finance'},function(err,users){
        if (err) {
            console.log("Something wrong when updating data!");
        }
        const mentorList = users;
        console.log(mentorList);
        return res.render('dashboard/mentor1',{
            title:'Coding Mentor',
            mentor_list:mentorList
        })

    })
}
module.exports.music=function(req,res){
    User.find({interest:'music'},function(err,users){
        if (err) {
            console.log("Something wrong when updating data!");
        }
        const mentorList = users;
        console.log(mentorList);
        return res.render('dashboard/mentor1',{
            title:'Coding Mentor',
            mentor_list:mentorList
        })

    })
}