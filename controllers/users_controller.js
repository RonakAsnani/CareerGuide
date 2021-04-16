const User = require('../models/users');

module.exports.profile = function(req,res){
    return res.render('profile',{
        title: "User Profile"
    })
}

module.exports.signUp = function(req,res){
    if(req.isAuthenticated()){
        return  res.redirect('/users/profile');
    }

    return res.render('sign-up',{
        title: "CareerGuide | Sign Up"
    })
};

module.exports.signIn = function(req,res){

    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render("sign-in",{
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
    return res.redirect('/users/profile');
}

module.exports.destroySession = function(req,res){
    req.logout();
    return res.redirect('/');
}