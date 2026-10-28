const AgencyService = require('../services/agencyService')

const findAllAgencies = async (req, res, next) => {
  try {
    const data = await AgencyService.find();

    res.status(200).json({
      message: "OK",
      data,
    });
  } catch (error) {
    next(error);
  }
};

const findOneAgency = async (req, res, next) => {
  try {
    const { params : { id }} = req
    const data = await AgencyService.findOne(id)

    res.status(200).json({
      message: 'OK',
      data
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  findAllAgencies,
  findOneAgency,
}