const express = require('express');
const api2 = express();

const productRoutes = require('./products');

api2.use('/products', productRoutes);

module.exports = api2;