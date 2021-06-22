const express = require('express');
const {getAllPlanets} = require('./planetController')



const planetRouter = express.Router();

planetRouter.get('/planets', getAllPlanets)

module.exports = planetRouter