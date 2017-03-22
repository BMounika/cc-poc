/**
 * Created by vemulma on 3/22/2017.
 */
var express = require('express');
var bodyParser = require('body-parser');
const curdController = require('../controllers/curdController.js');

const appRouter = express.Router();

(function() {
    module.exports = function(app) {
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
        app.use(express.static('public'));

        appRouter.post('/', curdController.insertUser);
        appRouter.get('/all', curdController.getUsers);
        appRouter.get('/getRecord/:id', curdController.getUserOnId);
        appRouter.put('/edit/:id', curdController.updateUserDetails);
        appRouter.delete('/remove/:id', curdController.removeUserDetails);

        app.use('/app', appRouter);

    }
})()
