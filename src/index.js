const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const {PORT} = require('./config/server.config');
const apiRouter = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());

// If any request comes and route start with /api, we map it to apiRouter
app.use('/api', apiRouter);

app.get('/ping', (req, res) => {
    return res.json({message: "Problem service is alive"})
})

app.listen(PORT, () => {
    console.log(`Server started at PORT: ${PORT}`);
    
});