var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var books = [
{
    title: 'War and Peace',
    genre: 'Historical Fiction',
    author: 'Lev Nikolaevich Tolstoy',
    read: false
},
{
    title: 'The life of St. Paisie',
    genre: 'Autobiography',
    author: 'Jon Doe',
    read: false
},
{
    title: 'Getting things done',
    genre: 'Productivity',
    author: 'David Alen',
    read: true
},
{
    title: 'Profesionall Angular.js ',
    genre: 'Programming',
    author: 'Val Karpov',
    read: true
},
{
    title: 'Dev Web Apps with Node and Express',
    genre: 'Programming',
    author: 'Some Author',
    read: false
}
];

var router = function(nav) {
    adminRouter.route('/addBooks')
    .get(function(req, res) {
        var url = 'mongodb://localhost:27017/libraryApp';

        mongodb.connect(url, function(err, db) {
            var collection = db.collection('books');
            collection.insertMany(books, function(err, results) {
                res.send(results);
                db.close();
            });
        });

        //res.send('Inserting books');
    });

    return adminRouter;
};

module.exports = router;
