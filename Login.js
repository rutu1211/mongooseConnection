let express = require('express');
const mongoose = require('mongoose');
let router = express.Router();
const models = require('./model')

router.get('/Login/LoginUser', (req, res) => {
    var query = models.registration.find();
    query.exec().then(data => {
        console.log(data)
        res.send({ data: data})}
    ).catch(err => res.send(err));
});

module.exports = router