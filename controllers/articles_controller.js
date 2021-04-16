module.exports.articles = function(req,res){
    return res.render('articles.ejs',{
        title: "Articles"
    })
}