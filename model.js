let express = require('express');
const mongoose = require('mongoose');

const models = 
{
    registration : mongoose.model('Registration', new mongoose.Schema({ name: 'string', password: 'string' }))
} 

module.exports = models;