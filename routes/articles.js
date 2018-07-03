// import mongoose from 'mongoose';
// import Articles from '../models/article';
// const express = require('express');

// const router = express.Router();

// // mongoose.connect('mongodb://localhost/test');

// // const db = mongoose.connection;
// // db.on('error', console.error.bind(console, 'connection error:'));
// // db.once('open', () => {
// //   console.log('connected to mongodb?');
// //   // we're connected!
// // });

// /* GET users listing. */
// router.get('/', (req, res, next) => {
//   res.json([{
//     id: 1,
//     username: 'samsepi0l',
//   }, {
//     id: 2,
//     username: 'D0loresH4ze',
//   }]);
// });

// module.exports = router;
const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.json([{
    id: 1,
    username: 'samsepi0l',
  }, {
    id: 2,
    username: 'D0loresH4ze',
  }]);
});

module.exports = router;
