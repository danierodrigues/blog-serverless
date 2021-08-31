const express = require('express');
const cors = require('cors');

const {routes: authorRoutes} = require('./controllers/author');

const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use('/author',authorRoutes);

module.exports = app;