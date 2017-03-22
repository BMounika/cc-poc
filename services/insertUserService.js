/**
 * Created by vemulma on 3/22/2017.
 */

const Student = require('../schema/register-formschema.js');

function insertUser(req){
    return new Promise(function(resolve, reject){
        var student = new Student();
        student.name = req.body.name;
        student.username = req.body.username;
        student.email = req.body.email;

        student.save((err) => {
            if(err) throw err.message;
            resolve({"msg":"User Saved..!"});
        })
    })
}

module.exports = insertUser;