// Importamos el modelo en el cual se van a basar los controladores

const modelProductos = require('../models/productos.model')

// Definimos las funciones asincronas para productos

exports.listarProductos = async (req, res) => {
    let listarProductos = await modelProductos.find()
    if (listarProductos)
        res.status(200).json(listarProductos)
    else
        res.status(404).json({ "Error": "No se encontraron productos registrados" })
}

exports.listarProductosPorId = async (req, res) => {
    let listarProductosPorId = await modelProductos.findOne({ _id: req.params.id })
    if (listarProductosPorId)
        res.status(200).json(listarProductosPorId)
    else
        res.status(404).json({ "error": "No se encontró este producto" })
}

exports.nuevoProducto = async (req, res) => {
    let nuevoProducto = {
        nombre: req.body.name,
        contenido: req.body.cont,
        disponible: req.body.avai
    }

    let agregarProducto = await modelProductos.create(nuevoProducto)
    if (agregarProducto)
        res.status(200).json({"Mensaje":"Producto agregado correctamente"})
    else
        res.status(404).json({"Mensaje":"No se pudo agregar el producto"})
}

exports.editarProducto = async (req, res) => {
    let productoEditado = {
        nombre: req.body.name,
        contenido: req.body.cont,
        disponible: req.body.avai
    }

    let actualizar = await modelProductos.findOneAndUpdate({_id: req.params.id}, productoEditado)
    if (actualizar)
        res.status(200).json({"Mensaje":"Producto actualizado correctamente"})
    else
        res.status(404).json({"Mensaje":"No se pudo actualizar el producto"})

}

exports.eliminarProducto = async (req, res) => {

    let eliminarProducto = await modelProductos.findOneAndDelete({_id: req.params.id})
    if (eliminarProducto)
        res.status(200).json({"Mensaje":"Producto eliminado correctamente"})
    else
        res.status(404).json({"Mensaje":"No se pudo eliminar el producto"})

}