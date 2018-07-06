const mongoose = require('mongoose');
const Article = require('../models/article');
const express = require('express');

const router = express.Router();

mongoose.connect('mongodb://localhost/test');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected to mongodb?');
  // we're connected!
});

/* GET users listing. */
router.get('/', (req, res, next) => {
  Article.find((err, articles) => {
    if (err) console.log('Error at article finding', err);
    console.log('Reportedly found articles', articles);
    res.json(articles);
  });
});

router.post('/', (req, res, next) => {
  console.log('but req is', req.params);
  console.log('but params are', req.body);
  Article.create({
    _id: req.body._id,
    headline: req.body.headline,
    weburl: req.body.weburl,
    snippet: req.body.snippet,
    byline: req.body.byline,
    img: req.body.img,
  }, (err, arti) => {
    if (err) console.log('Error at inserting document', err);
    return arti;
  });
  res.send('Added an article');
});

router.delete('/', (req, res, next) => {
  console.log('Clearing out saved articles');
  Article.remove({}, (error) => {
    console.log('error at clear', error);
  });
  res.send('Articles cleared');
});

module.exports = router;
