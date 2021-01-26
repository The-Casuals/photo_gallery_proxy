const express = require('express');
const axios = require('axios');

const api = express.Router();

api.get('/galleries/:id', (req, res) => {
  axios.get(`http://localhost:3017/api/galleries/${req.params.id}`)
    .then(({data}) => res.status(200).send(data))
    .catch((err) => res.status(400)/send(err));
});

api.get('/checkout/:id', (req, res) => {
  axios.get(`http://localhost:3010/api/checkout/${req.params.id}`)
    .then(({data}) => res.status(200).send(data))
    .catch((err) => res.status(400).send(err));
})

api.get('/img_carousel/:id', (req, res) => {
  axios.get(`http://localhost:3004/api/img_carousel/${req.params.id}`)
    .then(({data}) => res.status(200).send(data))
    .catch((err) => res.status(400).send(err));
})

api.get('/reviews/:id', (req, res) => {
  axios.get(`http://localhost:3000/api/reviews/${req.params.id}`)
    .then(({data}) => res.status(200).send(data))
    .catch((err) => res.status(400).send(err));
})

module.exports = api;