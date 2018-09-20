let express = require('express');
const mongoose = require('mongoose');
let router = express.Router();

var schema = new mongoose.Schema({ name: 'string', password: 'string' });
var Registration = mongoose.model('Registration', schema);

router.post('/RegisterUser', (req, res) => {
    Registration.create({ name: 'rutu', password: 'rutu@123' })
    res.send('data inserted');
});
router.get('/LoginUser', (req, res) => {
    var query = Registration.find();
    query.exec().then(data => {
        console.log(data)
        res.send({ data: data})}
    ).catch(err => res.send(err));
});
module.exports = router