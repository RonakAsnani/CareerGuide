const User = require('../models/users');

module.exports.profile = function(req,res){
    return res.render('profile',{
        title: "User Profile"
    })
}
module.exports.mentorProfile = function(req,res){
    return res.render('mentor_profile',{
        title: "Mentor Profile"
    })
}

module.exports.signUp = function(req,res){


    return res.render('sign-up',{
        title: "CareerGuide | Sign Up"
    })
};

module.exports.signIn = function(req,res){

    if(req.isAuthenticated()){
       // console.log(res.locals);
        if(res.locals.user.field == "student"){
            return res.redirect('/users/profile');
        }
        if(res.locals.user.field == "mentor"){
            return res.redirect('/users/mentor_profile');
        }
        
    }
    return res.render('sign-in',{
        title: "CareerGuide | Sign In"
    })
}

// get sign up data
module.exports.create = function(req,res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email : req.body.email},function(err,user){
        if(err){
            console.log("error in finding user in signing up"); 
            return;
        }
        if(!user){
            User.create(req.body,function(err,user){
                if(err){
                    console.log("error in creating user in signing up"); 
                    return;
                }

                return res.redirect('/users/sign-in');
            })
        }else{
            return res.redirect('back');
        }
    })

}






module.exports.createSession = function(req,res){
    User.findOne({email:req.body.email},function(err,user){
        if(user.field == "student"){
            return res.redirect('/users/profile');
        }
        if(user.field == "mentor"){
            return res.redirect('/users/mentor_profile');
        }
    })
    
    //return res.redirect('/users/sign-in');
    
}

module.exports.destroySession = function(req,res){
    req.logout();
    return res.redirect('/');
}