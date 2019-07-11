const Router = require('express').Router;
var mainRouter = new Router();

let geoRoutes = require('./geo');


mainRouter.use('/geoquery', geoRoutes);

module.exports = mainRouter;