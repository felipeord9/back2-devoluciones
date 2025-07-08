const { Op } = require("sequelize");
const { models } = require("../libs/sqlServer");

const find = () => {
  const costos = models.Margen.findAll({
    limit:100000
    
  });

  return costos;
};

const findOne = (id) => {
  const costo = models.Margen.findAll({
    where: {
      IdItemExt:id
    }
  })

  if(!costo) throw new Error('No se encontro el producto')

  return costo
}

const findInstall = (id) => {
  const date = new Date().getFullYear()
  const costo = models.Margen.findAll({
    where: {
      IdInstalacion:id,
      /* costoPromedio: {
        [Op.not]: 0
      },
      existencia: {
        [Op.not]: 0
      },
      IdItemExt: '3046' */
    }
  })

  if(!costo) throw new Error('No se encontro el producto')

  return costo
}

const findInstallAndItem = (id, item) => {
  const costo = models.Margen.findAll({
    where: {
      IdInstalacion:id,
      IdItemExt: item
    }
  })

  if(!costo) throw new Error('No se encontro el producto')

  return costo
}

module.exports = {
  find,
  findOne,
  findInstall,
  findInstallAndItem
};
