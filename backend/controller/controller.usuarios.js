const modelUsuario = require('../models/usuarios.model')

listarUsuarios = async (req, res) => {
    const listarUsuarios = await modelUsuario.find()

    if (listarUsuarios)
        res.status(200).json(listarUsuarios)
    else
        res.status(404).json({"Mensaje":"No se encontraron usuarios registrados"})
}

listarUsuarioPorId = async (req, res) => {
    const listarUsuarioPorId = await modelUsuario.findOne({_id: req.params.id})

    if (listarUsuarioPorId)
        res.status(200).json(listarUsuarioPorId)
    else 
        res.status(404).json({"Mensaje":"No se encontró este usuarios registrado"})
}

nuevoUsuario = async (req, res) => {
    const nuevoUsuario = {
        nombre: req.body.name,
        email: req.body.email,
        contraseña: req.body.pass
    }

    const crearUsuario = await modelUsuario.create(nuevoUsuario)
    if (crearUsuario)
        res.status(200).json({"Mensaje": "Usuario creado con éxito"})
    else
        res.status(404).json({"Mensaje":"No se pudo crear el nuevo usuario"})
}

editarUsuario = async (req, res) => {
    const editarUsuario = {
        nombre: req.body.name,
        email: req.body.email,
        contraseña: req.body.pass
    }

    const actualizar = await modelUsuario.findOneAndUpdate({_id: req.params.id}, editarUsuario)
    if (actualizar)
        res.status(200).json({"Mensaje": "Usuario actualizado con éxito"})
    else
        res.status(404).json({"Mensaje":"No se pudo actualizar el usuario"})
}

eliminarUsuario = async (req, res) => {
    const eliminarUsuario = await modelUsuario.findOneAndDelete({_id: req.params.id})
    if (eliminarUsuario)
        res.status(200).json({"Mensaje":"Usuario eliminado con éxito"})
    else
        res.status(404).json({"Mensaje":"No se pudo eliminar el usuario"})
}

// Practicando con otra forma de exportación

module.exports = {
    listarUsuarios,
    listarUsuarioPorId,
    nuevoUsuario,
    editarUsuario,
    eliminarUsuario
}