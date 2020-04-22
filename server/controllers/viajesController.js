const Viaje = require('../models/Viajes');

exports.consultaViajes = async (req,res)=>{
   const viajes = await Viaje.findAll();
        res.render('viajes',{
            pagina: 'Proximos Viajes',
            viajes
        })
    }

    exports.detalleViaje = async (req,res)=>{
        const viaje = await Viaje.findByPk(req.params.id);
            res.render ('viaje',{
                viaje
            })
    }