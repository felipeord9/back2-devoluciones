const SellerService = require('../services/sellerService')

const findAllSellers = async (req, res, next) => {
  try {
    const data = await SellerService.find()

    res.status(200).json({
      message: 'OK',
      data
    })
  } catch (error) {
    next(error)
  }
}

const findOneSeller = async (req, res, next) => {
  try {
    const { params: { id }} = req
    const data = await SellerService.findOne(id)

    res.status(200).json({
      message: 'Ok',
      data
    })
  } catch (error) {
    next(error)    
  }
}

module.exports = {
  findAllSellers,
  findOneSeller
}