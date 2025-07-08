const express = require('express')
const InstalacionController = require('../../controllers/instalacionController')

const router = express.Router()

router
  .get('/', InstalacionController.findAllInstalaciones)

module.exports = router