const express = require('express');
const api = express();

const productRoutes = require('./products');

api.use('/products', productRoutes);

module.exports = api;