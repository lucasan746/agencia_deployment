const express = require ('express');
const router = express.Router();
const Viaje = require('../models/Viajes');
const Testimonial = require('../models/Testimoniales');
const nosotrosController = require('../controllers/nosotrosController');
const indexController = require('../controllers/indexController');
const viajesController = require('../controllers/viajesController');
const testimonialesController = require('../controllers/testimonialesController');


module.exports = function() {

	router.get('/',indexController.indexConsultas);
	router.get('/nosotros',nosotrosController.infoNosotros);
	router.get('/viajes', viajesController.consultaViajes);
	router.get('/viajes/:id',viajesController.detalleViaje);
	router.get('/testimoniales', testimonialesController.consultaTestimonial);
	router.post("/testimoniales",testimonialesController.agregarTestimonial);

	return router;

}