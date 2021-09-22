const express = require('express');
const Readytowork = require('../models/readytowork');

const readytoworkRouter = express.Router();

readytoworkRouter.route('/')
  .get((req, res, next) => {
    Readytowork.find()
      .then(readytoworks => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(readytoworks);
      })
      .catch(err => next(err));
  })
  .post((req, res, next) => {
    Readytowork.create(req.body)
      .then(readytowork => {
        console.log('ready to work user Created ', readytowork);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(readytowork);
      })
      .catch(err => next(err));
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /readytoworks');
  })
  .delete((req, res, next) => {
    Readytowork.deleteMany()
      .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
      })
      .catch(err => next(err));
  });

readytoworkRouter.route('/:readytoworkId')
  .get((req, res, next) => {
    Readytowork.findById(req.params.readytoworkId)
      .then(readytowork => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(readytowork);
      })
      .catch(err => next(err));
  })
  .post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /readytoworks/${req.params.readytoworkId}`);
  })
  .put((req, res, next) => {
    Readytowork.findByIdAndUpdate(req.params.readytoworkId, {
      $set: req.body
    }, { new: true })
      .then(readytowork => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(readytowork);
      })
      .catch(err => next(err));
  })
  .delete((req, res, next) => {
    Readytowork.findByIdAndDelete(req.params.readytoworkId)
      .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
      })
      .catch(err => next(err));
  });

module.exports = readytoworkRouter;