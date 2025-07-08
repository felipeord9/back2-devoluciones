const BodegaService = require("../services/bodegaService");

const findAllBodega = async (req, res, next) => {
  try {
    const data = await BodegaService.find();
    res.status(200).json({
      status: "OK",
      data,
    });
  } catch (error) {
    next(error);
  }
};


module.exports = {
  findAllBodega,
};