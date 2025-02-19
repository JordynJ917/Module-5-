const express = require('express')
const app = express()
const port = 3000

app.arguments('/', express.static('public'))

const calculatorRoutes = require('./routes/calculatorRoutes');
app.use('/calculator', calculatorRoutes);

module.exports = app;