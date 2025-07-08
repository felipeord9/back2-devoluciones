const express = require('express')
const SellerController = require('../../controllers/sellerController')

const router = express.Router()

router
  .get('/', SellerController.findAllSellers)
  .get('/:id', SellerController.findOneSeller)

module.exports = router