const modelCliente = require('../models/cliente.model')

exports.listarClientes = async(req,res)=>{
    let listaCliente = await modelCliente.find();
    if(listaCliente)
        res.status(200).json(listaCliente);
    else
        res.status(404).json({error:'No se encontraron productos'})
};

exports.listarClienteEspecifico = async(req,res)=>{
    let listaCliente = await modelCliente.findOne({_id:req.params.id});
    if(listaCliente)
        res.status(200).json(listaCliente);
    else
        res.status(404).json({error:'No se encontraron productos'})
};

exports.nuevoCliente = async (req, res) => {

    const nuevoCliente = {
        documento: req.body.doc,
        nombreCompleto: req.body.nc,
        fNacimiento: req.body.fn
    }

    let insertarCliente = await modelCliente.create(nuevoCliente)
    if(insertarCliente)
        res.status(200).json({Mensaje: "Registro exitoso"})
    else
        res.status(400),json({Mensaje: "Se presentó un error"})
};

exports.editarCliente = async (req, res) => {
    const clienteEditado = {
        documento: req.body.doc,
        nombreCompleto: req.body.nc,
        fNacimiento: req.body.fn
    };

    let actualizacion = await modelCliente.findOneAndUpdate({_id: req.params.id }, clienteEditado);
    if (actualizacion)
        res.status(200).json({ "mensaje": "actualización exitosa" });
    else
        res.status(404).json({ "mensaje": "Se presentó un error" });
};

exports.editarCampoCliente = async (req, res) => {
    const campos = {};
    if (req.body.doc) campos.documento = req.body.doc;
    if (req.body.nc) campos.nombreCompleto = req.body.nc;
    if (req.body.fn) campos.fNacimiento = req.body.fn;

    try {
        let actualizacion = await modelCliente.updateOne(
            {_id: req.params.id},
            {$set: campos},
            {new: true}
        )
        if (actualizacion)
            res.status(200).json({ "mensaje": "actualización exitosa" });
        else
            res.status(404).json({ "mensaje": "Se presentó un error" });

    } catch {
        res.status(500).json({ "Mensaje": "Se presentó un error"})
    }
};

exports.eliminarCliente = async (req, res) => {

    let eliminacion = await modelCliente.findOneAndDelete({_id: req.params.id });

    if (eliminacion)
        res.status(200).json({ "mensaje": "eliminacion exitosa" });
    else
        res.status(404).json({ "mensaje": "Se presentó un error" });
};