/**
 * Created by vemulma on 3/22/2017.
 */

const Student = require('../schema/register-formschema.js');

function getUserById(req){
    return new Promise(function(resolve, reject){
        var id = req.params.id;
        Student.findById({_id:id}, (err, doc) => {
            if(err) throw err.message;
            resolve(doc);
        })
    })
}

module.exports = getUserById;