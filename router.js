const controladorClientes = require('./backend/controller/controller.clientes')

const exp = require('express')
const router = exp.Router()

router.get('/clientes', controladorClientes.listarClientes)
router.get('/clientes/:id', controladorClientes.listarClienteEspecifico)
router.post('/clientes', controladorClientes.nuevoCliente)
router.put('/clientes/:id', controladorClientes.editarCliente)
router.patch('/clientes/:id', controladorClientes.editarCampoCliente)
router.delete('/clientes', controladorClientes.eliminarCliente)

module.exports = router