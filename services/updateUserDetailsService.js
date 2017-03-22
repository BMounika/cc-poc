/**
 * Created by vemulma on 3/22/2017.
 */

const Student = require('../schema/register-formschema.js');

function updateUser(req){
    return new Promise(function(resolve, reject){
        var studentId = req.params.id;
        Student.findById({_id : studentId},(err, doc) => {
            if(err) throw err.message;
            if(req.body.name) doc.name = req.body.name;
            if(req.body.username) doc.username = req.body.username;
            if(req.body.email) doc.email = req.body.email;
            if(req.body.phonenumber) doc.phonenumber = req.body.phonenumber;
            doc.save((err) => {
                if(err) throw err.message;
               resolve({"msg":"User Updated..!"});
            })
        })
    })
}

module.exports = updateUser;