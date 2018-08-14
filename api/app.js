var config = require("./config");
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// ROUTES
var router = express.Router();
router.get('/', function (req, res) {
    res.json({message: 'hooray! welcome to our api!'});
});

router.route('/texts')
    .post(function (req, res) { // create
        var text = new Text();
        var input_text = req.body.str;
        if (input_text !== undefined) {
            text.str = input_text;
            text.save(function (err) {
                if (err)
                    res.send(err);
                res.status(201);
                res.json(text);
            });
        } else {
            res.status(400);
            res.send({message: 'str param is required'});
        }
    })

    .get(function (req, res) { // obtain all created texts
        Text.find(function (err, texts) {
            if (err)
                res.send(err);
            res.json(texts);
        });
    });

// INDIVIDUAL RESOURCE
router.route('/texts/:id')
    .get(function (req, res) {
        Text.findById(req.params.id, function (err, text) {
            if (text === null) {
                res.status(404);
                res.send()
            } else {
                if (err)
                    res.send(err);
                res.json(text);
            }
        });
    })

    // Update
    .put(function (req, res) {
        Text.findById(req.params.id, function (err, text) {
            if (err)
                res.send(err);
            var input_text = req.body.str;
            if (input_text !== undefined) {
                text.str = input_text;
                text.save(function (err) {
                    if (err)
                        res.send(err);
                    res.json(text);
                });
            } else {
                res.status(400);
                res.send({message: 'str param is required'});
            }
        });
    })

    // Delete
    .delete(function (req, res) {
        Text.remove({
            _id: req.params.id
        }, function (err, text) {
            if (err)
                res.send(err);
            res.json({message: 'Text successfully deleted'});
        });
    });


app.use('/api', router);


// SETUP
var port = config.port;
var server = app.listen(port, function () {
    console.log("Application is now running on port:", server.address().port);
});

// MONGODB ORM
var mongoose = require('mongoose');

mongoose.connect(config.db, function(err, res) {
    if(err) {
        console.log('Error connecting to MongoDB. ' + err);
    } else {
        console.log('Connected to Database');
    }
});

// TEXT MODEL
var Text = require('./app/models/text');


module.exports = app;