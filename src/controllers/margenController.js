const CostoService = require("../services/margenService");

const findAllCostos = async (req, res, next) => {
  try {
    const data = await CostoService.find();
    res.status(200).json({
      status: "OK",
      data,
    });
  } catch (error) {
    next(error);
  }
};

const findOneCosto = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    console.log(`idItemExt: ${id}`)
    const data = await CostoService.findOne(id);

    res.status(200).json({
      status: "OK",
      data,
    });
  } catch (error) {
    next(error);
  }
};

const findByInstall = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    console.log(`idInstall: ${id}`)
    const data = await CostoService.findInstall(id);

    res.status(200).json({
      status: "OK",
      data,
    });
  } catch (error) {
    next(error);
  }
};

const findByInstallAndItem = async (req, res, next) => {
  try {
    const {
      params: { id, item },
    } = req;
    console.log(`id: ${JSON.stringify(id)} - body: ${JSON.stringify(item)}`)
    const data = await CostoService.findInstallAndItem(id, item);

    res.status(200).json({
      status: "OK",
      data,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  findAllCostos,
  findOneCosto,
  findByInstall,
  findByInstallAndItem
};
