module.exports.mentorConfirm = function(req,res){
    res.render('confirm_mentor',{
        title: "mentor"
    })
}

module.exports.mentorFail = function(req,res){
    res.render('mentor-fail',{
        title:"fail"
    })
}