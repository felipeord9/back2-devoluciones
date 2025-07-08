const express = require('express')
const PrecioController = require('../../controllers/precioController')

const router = express.Router()

router
  .get('/', PrecioController.findAllPrecios)
  .get('/:id', PrecioController.findOneCosto)
  .get('/item/:id', PrecioController.findOne)
  .get('/install/:id', PrecioController.findByInstall)
  .get('/item/:id/install/:item', PrecioController.findByInstallAndItem)

  module.exports = router