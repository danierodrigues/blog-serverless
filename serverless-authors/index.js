const express = require('express');
const cors = require('cors');

const {routes: authorRoutes} = require('./controllers/author');

const app = express();

app.use(cors());
app.use('/author', userRoutes);

module.exports = app;