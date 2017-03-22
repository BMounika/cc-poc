/**
 * Created by vemulma on 3/22/2017.
 */

const Student = require('../schema/register-formschema.js');

function removeUser(req){
    return new Promise(function(resolve, reject){
        var id = req.params.id;
        Student.remove({_id : id}, (err) => {
            if(err) throw err.message;
            resolve({"msg":"user Removed"})
        })
    })
}

module.exports = removeUser;