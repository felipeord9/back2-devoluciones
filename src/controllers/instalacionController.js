const InstalacionService = require("../services/instalacionService");

const findAllInstalaciones = async (req, res, next) => {
  try {
    const data = await InstalacionService.find();
    res.status(200).json({
      status: "OK",
      data,
    });
  } catch (error) {
    next(error);
  }
};


module.exports = {
  findAllInstalaciones,
};