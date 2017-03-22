/**
 * Created by galgara on 3/22/2017.
 */

/**
 * Created by galgara on 12/8/2016.
 */
'use strict';

var should = require('should');
var request = require('supertest');
var nock = require("nock");
var mock_data = require('./data.json');

describe('Get student details ', function () {

    it('student details ', function (done) {

        nock('http://localhost:3390')
            .log(console.log)
            .get('/app/all')
            .reply(200,mock_data.response)

        request("http://localhost:3390")
            .get("/app/all")
            .expect(200,mock_data.response)
            .end(function (err, res) {

                if (err) {
                    return done(err);
                } else {
                    // console.log(JSON.stringify(res.body));
                    res.body.should.be.instanceof(Object);
                    done();
                }
            });
    });

    it('student details based on id', function (done) {

        nock('http://localhost:3390')
            .log(console.log)
            .get('/app/getRecord/'+mock_data.studentId)
            .reply(200,mock_data.responseGetById)

        request("http://localhost:3390")
            .get("/app/getRecord/"+mock_data.studentId)
            .expect(200,mock_data.responseGetById)
            .end(function (err, res) {

                if (err) {
                    return done(err);
                } else {
                    // console.log(JSON.stringify(res.body));
                    res.body.should.be.instanceof(Object);
                    done();
                }
            });
    });

})

