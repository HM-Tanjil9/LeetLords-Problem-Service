const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const {PORT} = require('./config/server.config');
const apiRouter = require('./routes');
const BaseError = require('./errors/base.error');
const errorHandler = require('./utils/errorHandler');
const connectToDB = require('./config/db.config');
const { default: mongoose } = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());

// If any request comes and route start with /api, we map it to apiRouter

app.use('/api', apiRouter);
app.get('/ping', (req, res) => {
    return res.json({message: "Problem service is alive"})
})



// Last middleware if any error comes
app.use(errorHandler);

app.listen(PORT,async () => {
    console.log(`Server started at PORT: ${PORT}`);
    await connectToDB();
    console.log("Successfully connected to DB");

});