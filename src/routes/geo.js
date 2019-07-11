const Router = require('express').Router;
const geoController = require('../controllers/geo');
let geoModel = require('../model/geo');
var geoRoutes = new Router();

var geoControllerIns = new geoController(geoModel);


geoRoutes.get('/id/:id', (req, res) => {
  geoControllerIns.getGeo(req.params.id, (err, docs) => {
    if (err) {
      console.error(err);
      return res.status(500).end();
    }
    res.json(docs);
  });
});

geoRoutes.get('/page', (req, res) => {
  geoControllerIns.getGeos(req.query, 0, (err, docs) => {
    if (err) {
      console.error(err);
      return res.status(500).end();
    }
    res.json(docs);
  });
});

geoRoutes.get('/page/:page', (req, res) => {
  geoControllerIns.getGeos(req.query, req.params.page - 1, (err, docs) => {
    if (err) {
      console.error(err);
      return res.status(500).end();
    }
    res.json(docs);
  });
});

geoRoutes.get('/all', (req, res) => {
  geoControllerIns.getAllGeos(req.query, req.params.page - 1, (err, docs) => {
    if (err) {
      console.error(err);
      return res.status(500).end();
    }
    res.json(docs);
  });
});




geoRoutes.post('/', (req, res) => {
  geoControllerIns.addgeo(req.body, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).end();
    }
    console.log(result);
    res.status(201).end();
  });
});

geoRoutes.put('/:id', (req, res) => {
  geoControllerIns.editgeo(req.params.id, req.body, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).end();
    }
    console.log(result);
    res.json(result);
  });
});

geoRoutes.delete('/:id', (req, res) => {
  geoControllerIns.deletegeo(req.params.id, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).end();
    }
    res.status(204).end();
  });
});


module.exports = geoRoutes;