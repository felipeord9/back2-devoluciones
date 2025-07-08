const { Op } = require("sequelize");
const { models } = require("../libs/sqlServer");

const find = () => {
  const products = models.ExtensionItem.findAll({
    limit: 2500,
    include: {
      association: "item",
      as: "item",
      where: {
        tipo: [1, 3],
        indicadorVenta: 1,
        tipoInventario: {
          [Op.notIn]: [
            "IV140504  ",
            "IV143030  ",
            "IV141002  ",
            "IV143515  ",
            "IV143535  ",
            "IV145505  ",
          ],
        },
        /* [Op.or]: [
          { [Op.ne]: { tipoInventario: "IV140504  " } },
          { [Op.ne]: { tipoInventario: "IV143030  " } },
          { [Op.ne]: { tipoInventario: "IV141002  " } },
        ], */
      },
      order: [["id", "ASC"]],
    },
    where: {
      estado: 1,
    },
  });

  return products;
};

/* const findOne = (id) => {
  const product = models.Product.findByPk(id)

  if(!product) throw new Error('No se encontro el producto')

  return product
} */

module.exports = {
  find,
  //findOne
};
