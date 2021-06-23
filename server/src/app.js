const path = require('path')
const express = require('express');
const cors = require('cors');

const planetRouter = require('./routes/planets/planetsRoute');
const launchesRouter = require('./routes/launches/launchesRoute')


const app = express();


app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());


app.use('/planets',planetRouter);
app.use('/launches',launchesRouter);

app.get('/*', (req, res) => {

    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

module.exports = app; 