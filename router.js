const controladoresClientes = require('./backend/controller/controller.clientes')
const controladoresProductos = require ('./backend/controller/controller.productos')
const {listarUsuarios, listarUsuarioPorId, nuevoUsuario, editarUsuario, eliminarUsuario} = require('./backend/controller/controller.usuarios') //Practicando con otra forma de importación

const exp = require('express')
const router = exp.Router()

// endpoints para clientes

router.get('/clientes', controladoresClientes.listarClientes)
router.get('/clientes/:id', controladoresClientes.listarClientePorId)
router.post('/clientes', controladoresClientes.nuevoCliente)
router.put('/clientes/:id', controladoresClientes.editarCliente)
router.delete('/clientes/:id', controladoresClientes.eliminarCliente)

// endpoints para productos

router.get('/productos', controladoresProductos.listarProductos)
router.get('/productos/:id', controladoresProductos.listarProductosPorId)
router.post('/productos', controladoresProductos.nuevoProducto)
router.put('/productos/:id', controladoresProductos.editarProducto)
router.delete('/productos/:id', controladoresProductos.eliminarProducto)

// endpoints para usuarios

router.get('/usuarios', listarUsuarios)
router.get('/usuarios/:id', listarUsuarioPorId)
router.post('/usuarios', nuevoUsuario)
router.put('/usuarios/:id', editarUsuario)
router.delete('/usuarios/:id', eliminarUsuario)

module.exports = router