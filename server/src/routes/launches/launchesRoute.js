const express = require('express');
const { httpGetAllLaunches, httpAddNewLunch} = require('./launchesController')

const launchesRouter = express.Router();

launchesRouter.get('/', httpGetAllLaunches);
launchesRouter.post('/', httpAddNewLunch)

module.exports = launchesRouter;