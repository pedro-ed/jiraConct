const express = require('express')
const routes = express.Router()
// rotas
const OngController = require("./controllers/ongsControllers")



// LISTAR TODAS AS ONGS
routes.get('/teste', OngController.index)
// CRIAR ONGS
routes.post('/ongs',OngController.create)

module.exports = routes
