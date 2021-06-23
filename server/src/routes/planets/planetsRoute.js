const express = require('express');
const {httpGetAllPlanets} = require('./planetController')



const planetRouter = express.Router();

planetRouter.get('/', httpGetAllPlanets)

module.exports = planetRouter