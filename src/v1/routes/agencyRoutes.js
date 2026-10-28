const express = require('express')
const AgencyController = require('../../controllers/agencyController')

const router = express.Router()

router
    .get('/', AgencyController.findAllAgencies)
    .get('/:id', AgencyController.findOneAgency)

module.exports = router