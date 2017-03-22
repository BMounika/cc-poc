/**
 * Created by vemulma on 3/22/2017.
 */

const insertUserService = require('../services/insertUserService.js');
const getUserService = require('../services/getUsersService.js');
const getUserById = require('../services/getUserByIdService.js');
const updateUser = require('../services/updateUserDetailsService.js');
const removeUser = require('../services/removerUserService.js');

exports.insertUser = function(req, res){
  insertUserService(req)
      .then(function(data){
          res.json(data);
      });
};

exports.getUsers = function(req, res){
    getUserService(req)
        .then(function(data){
            res.json(data);
        });
};

exports.getUserOnId = function(req, res){
    getUserById(req)
        .then(function(data){
            res.json(data);
        });
};

exports.updateUserDetails = function(req, res){
    updateUser(req)
        .then(function(data){
            res.json(data);
        });
};

exports.removeUserDetails = function(req, res){
    removeUser(req)
        .then(function(data){
            res.json(data);
        });
};