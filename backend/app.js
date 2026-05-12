const express = require('express');
const app = express();
const cors = require('cors'); 
const ordersRoute = require("./Routes/odersRoute")

app.use(cors());
app.use(express.json());

app.use('/orders', ordersRoute);

module.exports = app;
