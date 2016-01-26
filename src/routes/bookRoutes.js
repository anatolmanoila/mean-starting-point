var express = require('express');

var bookRouter = express.Router();

var router = function(nav) {
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

    bookRouter.route('/').get(function(req, res) {
      res.render('bookListView', {
          title: 'Books ',
          nav: nav,
          books: books
      });
  });
    bookRouter.route('/:id').get(function(req, res) {
      var id = req.params.id;
      res.render('bookView', {
          title: 'Books ',
          nav: nav,
          book: books[id]
      });
  });

    return bookRouter;
};

module.exports = router;
