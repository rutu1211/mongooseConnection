let express = require('express');
const mongoose = require('mongoose');
let router = express.Router();
const models = require('./model')

router.post('/registration/RegisterUser', (req, res) => {
  models.registration.create({ name: 'rutu', password: 'rutu@123' })
    res.send('data inserted');
});

module.exports = router