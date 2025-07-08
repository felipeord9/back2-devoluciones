const { models } = require('../libs/sqlServer')

const find = () => {
  const sellers = models.Vendedor.findAll({
    limit: 50,
    include: ['tercero']
  })
  return sellers
}

const findOne = (id) => {
  const seller = models.Seller.findByPk(id)

  if(!seller) throw Error("No se encontro el vendedor")

  return seller
}

module.exports = {
  find,
  findOne
}