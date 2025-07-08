const express = require('express')
const BodegaController = require('../../controllers/bodegaController')

const router = express.Router()

router
  .get('/', BodegaController.findAllBodega)

module.exports = router