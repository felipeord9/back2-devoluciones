const express = require('express')
const ClientController = require('../../controllers/clientController')

const router = express.Router()

router
  .get('/', ClientController.findAllClients)
  .get('/:id', ClientController.findOneClient)
  .post('/', ClientController.createClient)

module.exports = router