const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();
const api = require('./api');

app.use(compression());
app.use('/:id', express.static(path.join(__dirname, '..', 'public')));

app.use('/api', api);

const PORT = 3000;
app.listen(PORT);
console.log(`Listening on http://localhost:${PORT}`)