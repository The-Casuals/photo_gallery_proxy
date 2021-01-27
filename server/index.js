const express = require('express');
const path = require('path');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
// const bundles = require('./bundles');
const api = require('./api');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use('/:id', express.static(path.join(__dirname, '..', 'public')));

// app.use('/:id/bundles', bundles);
app.use('/api', api);

const PORT = 3000;
app.listen(PORT);
console.log(`Listening on http://localhost:${PORT}`)