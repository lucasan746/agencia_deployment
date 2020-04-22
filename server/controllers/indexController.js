const Viaje = require('../models/Viajes');
const Testimonial = require('../models/Testimoniales');


exports.indexConsultas = async (req,res)=>{
    const viajes = await Viaje.findAll({limit: 3});
    const testimoniales = await Testimonial.findAll({limit: 3});

        res.render('index',{
            pagina: 'Proximos Viajes',
            viajes,
            testimoniales,
            clase: 'home'
        })
    }