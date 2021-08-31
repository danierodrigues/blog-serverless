const express = require('express');
const cors = require('cors');

const {routes: postsRoutes} = require('./controllers/posts');

const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use('/posts',postsRoutes);

module.exports = app;