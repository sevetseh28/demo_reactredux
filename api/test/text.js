process.env.NODE_ENV = 'test';

var chai = require('chai');
var request = require('supertest');
var Text = require('../app/models/text');
var should = chai.should();
var expect = chai.expect;
var app = require('../app');


//Our parent block
describe('Texts GETTERS and CREATION', () => {
    beforeEach(function (done) {
        var newText = new Text({
            str: 'Texto ejemplo test!'
        });
        newText.save(function (err) {
            done();
        });
    });
    afterEach(function (done) {
        Text.collection.drop();
        done();
    });

    describe('GET all texts', () => {
        it('GET /api/texts -- it should get all the texts (one element)', (done) => {
            request(app)
                .get('/api/texts')
                .expect(200)
                .end((err, res) => {
                    expect(res.body).to.be.an('array');
                    res.body[0].should.have.property('_id');
                    res.body[0].should.have.property('str');
                    done();
                });
        });
    });

    describe('POST /api/texts -- Create text', () => {
        it('should create and return the created text (code 201)', (done) => {
            var new_text = 'TEXTO!';
            request(app)
                .post('/api/texts')
                .send({str: new_text})
                .expect(201)
                .end((err, res) => {
                    expect(res.body.str).to.be.eq(new_text);
                    done();
                });
        });

        it('should not create a text without a value', (done) => {
            request(app)
                .post('/api/texts')
                .send({})
                .expect(401)
                .end((err, res) => {
                    done();
                });
        });
    });

    describe('GET /api/texts/:id -- Get a text by id', function () {
        it('should get a text by specifyng the ID', function (done) {
            var newText = new Text({
                str: 'Texto ejemplo test!'
            });
            newText.save((err, data) => {
                request(app)
                    .get('/api/texts/' + data._id)
                    .expect(200)
                    .end((err, res) => {
                        expect(res.body.str).to.be.eq(newText.str);
                        done();
                    });
            });
        });
    });

    describe('DELETE /api/texts/:id -- Delete a text', function () {
        it('should delete a text', function (done) {
            var newText = new Text({
                str: 'Texto ejemplo test!'
            });
            newText.save((err, data) => {
                request(app)
                    .delete('/api/texts/' + data._id)
                    .expect(200)
                    .end((err, res) => {
                        expect(res.body.message).to.be.eq('Text successfully deleted');
                        done();
                    });
            });
        });
    });

    describe('PUT /api/texts/:id -- Update a text', function () {
        it('should update a text', function (done) {
            var newText = new Text({
                str: 'Texto ejemplo test!'
            });
            newText.save((err, data) => {
                request(app)
                    .put('/api/texts/' + data._id)
                    .send({str: 'Hola!'})
                    .expect(200)
                    .end((err, res) => {
                        expect(res.body.str).to.be.eq('Hola!');
                        done();
                    });
            });
        });
    });

});