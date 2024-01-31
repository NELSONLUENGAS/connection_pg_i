require('./database/index');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes/index');

const app = express();

// middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// Routes
app.use('/', routes);
module.exports = app;
