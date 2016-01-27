var express = require('express');
var bookRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var router = function(nav) {
    var url = 'mongodb://localhost:27017/libraryApp';

    bookRouter.route('/').get(function(req, res) {

        mongodb.connect(url, function(err, db) {
            var collection = db.collection('books');

            collection.find({}).toArray(function(err, results) {
                res.render('bookListView', {
                    title: 'Books ',
                    nav: nav,
                    books: results
                });
            });
        }); //mongodb.connect
    });

    bookRouter.route('/:id').get(function(req, res) {
        var id = new ObjectId(req.params.id);

        mongodb.connect(url, function(err, db) {
            var collection = db.collection('books');
            collection.findOne({_id: id},function(err, results) {
              res.render('bookView', {
                title: 'Books ',
                nav: nav,
                book: results
            });
          });
        });
    });

    return bookRouter;
};

module.exports = router;
