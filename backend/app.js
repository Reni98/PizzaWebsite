const express = require('express');
const app = express();
const ordersRoute = require("./Routes/odersRoute")
app.use(express.json());

app.use('/orders', ordersRoute);

module.exports = app;