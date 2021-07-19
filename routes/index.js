const express = require('express');
const phonesJson = require('../db/phones.json');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Catelog Server' });
});

/* GET phone list. */
router.get('/phones', (req, res) => {
  res.json({
    success: true,
    data : phonesJson
  });
});

module.exports = router;
