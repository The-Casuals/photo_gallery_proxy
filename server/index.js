const express = require('express');
const path = require('path');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use('/:id', express.static(path.join(__dirname, '..', 'public')));

app.get('/:id/bundle/', (req, res ) => {
  console.log('da pingz');
  axios.get('http://localhost:3017/1')
    .then(({data}) => {
    res.status(200).send(data);
  })
    .catch((err) => {
      res.status(400).send(err);
    })
});

app.get('/api/galleries/:id', (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  axios.get(`http://localhost:3017/api/galleries/${id}`)
    .then(result => {
      console.log('yay it works');
      const { data } = result;
      console.log(data);
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(400).send(err);
    })
});

app.get('/api/checkout/:id', (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  axios.get(`http://localhost:3010/api/checkout/${id}`)
    .then(result => {
      console.log('yay it works!')
      const { data } = result;
      console.log(data);
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(400).send(err);
    })
})

app.get('/api/img_carousel/:id', (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  axios.get(`http://localhost:3004/api/img_carousel/${id}`)
    .then((result) => {
      console.log('yay it works!')
      const { data } = result
      console.log(data);
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    })
})

app.get('/api/reviews/:id', (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  axios.get(`http://localhost:3000/api/reviews/${id}`)
    .then((result) => {
      console.log('yay it works!');
      const { data } = result;
      console.log(data);
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    })
})

const PORT = 3001;
app.listen(PORT);
console.log(`Listening on http://localhost:${PORT}`)