/**
 * Created by vemulma on 3/22/2017.
 */

const Student = require('../schema/register-formschema.js');

function getAllUsers(req){
    return new Promise(function(resolve, reject){
        Student.find((err, docs) => {
            if(err) throw err.message;
            resolve(docs);
        })
    })
}

module.exports = getAllUsers;