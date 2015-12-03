// set up ========================
var express  = require('express');
var app      = express();                               // create our app w/ express
var mongoose = require('mongoose');                     // mongoose for mongodb
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

// configuration =================


//test db
//mongoose.connect('mongodb://node:nodeuser@mongo.onmodulus.net:27017/uwO3mypu');     // connect to mongoDB database on modulus.io
//new db
mongoose.connect('mongodb://john:12345@waffle.modulusmongo.net:27017/ojyTeb8i');
/*
 our database has been created and is ready for use.
 MONGO URI
 mongodb://<user>:<pass>@apollo.modulusmongo.net:27017/ovEw7ety
 MONGO CONSOLE
 mongo apollo.modulusmongo.net:27017/ovEw7ety -u <user> -p <pass>
 You can view stats, manage users, export your data, and other tasks through the Database Dashboard.
 */

app.use(express.static(__dirname + '/app'));                 // set the static files location /app/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

//model

var Todo = mongoose.model('restaurants', {
    text : String
});

// routes ==========================

// api ---------------------------------------------------------------------

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var dbUrl = 'mongodb://john:12345@apollo.modulusmongo.net:27017/usiz4aMy';


app.get('/api/auth-attempts', function(req, res) {

    var callback = function() {
        console.log('callback');
    };

    var findAttempts = function(db, callback) {
        var cursor = db.collection('attempts').find( );
        cursor.each(function(err, doc) {
            assert.equal(err, null);
            if (doc != null) {
                res.json(doc);
            } else {
                callback();
            }
        });
    };

    MongoClient.connect(dbUrl, function(err, db) {
        assert.equal(null, err);
        findAttempts(db, function() {
            db.close();
        });
    });

});

app.get('/api/new-attempt', function(req, res) {
    //req.body.text

    var callback = function(result) {
        console.log('callback');
    };

    var insertDocument = function(db, callback) {
        db.collection('attempts').insertOne({

            "attempt": {
                "ip": "123.456.789.000",
                "datetime": "12345",
                "action": "AUTH_FAILURE",
                "username": "new_somebody"
            }
        }, function(err, result) {
            assert.equal(err, null);
            console.log("Inserted a document into the attempts collection.");
            callback(result);
        });
    };

    MongoClient.connect(dbUrl, function(err, db) {
        assert.equal(null, err);
        insertDocument(db, function() {
            db.close();
        });
    });
});


app.get('/', function(req, res) {
    res.sendfile('./app/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});



// listen (start app with node server.js) ======================================
app.listen(8000);
console.log("App listening on port 8000");
