const { Op } = require("sequelize");
const { models } = require("../libs/sqlServer");

const find = () => {
  const clients = models.Tercero.findAll({
    limit: 4000,
    attributes: ["nit", "razonSocial"],
    include: [
      {
        association: "sucursales",
        attributes: ["id", "descripcion"],
        where: {
          estado: 1,
          idVendedor: {
            [Op.not]: null
          },
          /* idCo: {
            [Op.not]: null
          } */
        },
        include: [
          {
            association: "co",
            attributes: ["id", "descripcion"],
            include: ["contacto"]
          },
          {
            association: "vendedor",
            include: [
              {
                association: "tercero",
                attributes: ["nit", "razonSocial"],
                include: ["contacto"],
              },
            ],
          },
        ],
      },
    ],
    where: {
      nit: {
        [Op.not]: null,
      },
      estado: 1,
      indicadorCliente: 1,
    },
  });
  return clients;
};
/* 
const findOne = (id) => {
  const client = models.Client.findByPk(id, {
    include: [{
      association: "branches",
      include: ['seller']
    }]
  })

  if(!client) throw Error('No se encontro el cliente')

  return client
}

const create = (body) => {
  const client = models.Client.create(body)

  return client
} */

module.exports = {
  find,
  //findOne,
  //create
};
