const Testimonial = require('../models/Testimoniales');

exports.consultaTestimonial = async (req,res)=>{
    const testimoniales = await Testimonial.findAll()
        res.render('testimoniales',{
            pagina: 'Testimoniales',
            testimoniales
        })
}

exports.editarTestimonial = async (req,res)=>{
    const testimoniales = await Testimonial.findAll()
        res.render('editar',{
            pagina: 'Editar Testimoniales',
            testimoniales
        })
}

exports.borrarTestimonial = async (req,res)=>{
    await Testimonial.destroy({
        where:{
            id: req.body.id
        }
    }).then(testimonial => res.redirect('/edit'))
}

exports.agregarTestimonial = async (req,res)=> {
    let {nombre,correo,mensaje} = req.body;

    let errores = [];

    if(!nombre){
        errores.push({'mensaje':'Agrega tu nombre'})
    }
    if(!correo){
        errores.push({'mensaje':'Agrega tu correo'})
    }
    if(!mensaje){
        errores.push({'mensaje':'Agrega tu mensaje'})
    }

    if(errores.length>0){
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales',{
            errores,
            nombre,
            correo,
            mensaje,
            pagina: 'Testimoniales',
            testimoniales
        })
    }else{
        Testimonial.create({
            nombre,
            correo,
            mensaje
        }).then(testimonial => res.redirect('/testimoniales'))
        .catch(error=>console.log(error));
    }}