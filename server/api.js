const express = require('express');
const axios = require('axios');

const api = express.Router();

api.get('/galleries/:id', (req, res) => {
  axios.get(`http://72.134.126.46:3017/api/galleries/${req.params.id}`)
    .then(({data}) => res.status(200).send(data))
    .catch((err) => res.status(400)/send(err));
});

api.get('/checkout/:id', (req, res) => {
  axios.get(`http://34.219.249.230/api/checkout/${req.params.id}`)
    .then(({data}) => res.status(200).send(data))
    .catch((err) => res.status(400).send(err));
})

api.get('/img_carousel/:id', (req, res) => {
  axios.get(`http://3.101.61.202/api/img_carousel/${req.params.id}`)
    .then(({data}) => res.status(200).send(data))
    .catch((err) => res.status(400).send(err));
})

api.get('/reviews/:id', (req, res) => {
  axios.get(`http://54.215.215.126/api/reviews/${req.params.id}`)
    .then(({data}) => res.status(200).send(data))
    .catch((err) => res.status(400).send(err));
})

module.exports = api;