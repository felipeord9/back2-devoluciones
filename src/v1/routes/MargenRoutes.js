const express = require('express')
const CostoController = require('../../controllers/margenController')

const router = express.Router()

router
  .get('/', CostoController.findAllCostos)
  .get('/:id', CostoController.findOneCosto)
  .get('/install/:id', CostoController.findByInstall)
  .get('/item/:item/install/:id', CostoController.findByInstallAndItem)

module.exports = router