const { Op } = require("sequelize");
const { models } = require("../libs/sqlServer");

const find = () => {
  const bodega = models.Bodega.findAll({
    limit: 50000,
  });
  return bodega;
};

module.exports = {
  find,
};
