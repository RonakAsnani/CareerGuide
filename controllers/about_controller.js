module.exports.about = function(req,res){
    return res.render('about.ejs',{
        title: "About"
    })
}