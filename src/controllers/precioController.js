const PrecioService = require("../services/precioService");

const findAllPrecios = async (req, res, next) => {
  try {
    const data = await PrecioService.find();
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
    const data = await PrecioService.findOne(id);

    res.status(200).json({
      status: "OK",
      data,
    });
  } catch (error) {
    next(error);
  }
};

const findOne = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    console.log(`idItemt: ${id}`)
    const data = await PrecioService.findItem(id);

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
    const data = await PrecioService.findInstall(id);

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
      params: { id , item}
    } = req;
    console.log(`id: ${JSON.stringify(id)} - item: ${JSON.stringify(item)}`)
    const data = await PrecioService.findInstallAndItem(id, item);

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};


module.exports = {
  findAllPrecios,
  findOneCosto,
  findOne,
  findByInstall,
  findByInstallAndItem,
};
