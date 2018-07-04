const express = require("express");
const ethapi = express();

const ethapiRoutes = require("./blockinfo");

ethapi.use("/blockinfo", ethapiRoutes);

module.exports = ethapi;
