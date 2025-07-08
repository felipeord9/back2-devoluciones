const { Op } = require("sequelize");
const { models } = require("../libs/sqlServer");

const find = () => {
  const precios = models.Precio.findAll(/* {
    limit:100000
  } */);

  return precios;
};

const findOne = (id) => {
    const precio = models.Precio.findAll({
      where: {
        IdItemExt:id
      }
    })
  
    if(!precio) throw new Error('No se encontro el producto')
  
    return precio
  }

  const findItem = (id) => {
    const precio = models.Precio.findAll({
      where: {
        IdItem:id
      }
    })
  
    if(!precio) throw new Error('No se encontro el producto')
  
    return precio
  }

  const findInstall = (id) => {
    const costo = models.Precio.findAll({
      where: {
        IdInstalacion:id
      }
    })
  
    if(!costo) throw new Error('No se encontro el producto')
  
    return costo
  }

const findInstallAndItem = (id, item) => {
  const precio = models.Precio.findAll({
    where: {
      IdInstalacion:id,
      IdItemExt: item
    }
  })

  if(!precio) throw new Error('No se encontro el producto')

  return precio
}

module.exports = {
  find,
  findOne,
  findItem,
  findInstall,
  findInstallAndItem
};