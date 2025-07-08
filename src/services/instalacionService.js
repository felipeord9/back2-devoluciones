const { Op } = require("sequelize");
const { models } = require("../libs/sqlServer");

const find = () => {
  const instalaciones = models.Instalacion.findAll({
    where :{
      id: [
        '001', 
        '004', 
        '005', 
        '007', 
        '008', 
        '010', 
        '011',
        '012',
        '013',
        '014',
        '015',
        '016',
        '017',
        '023',
        '025',
        '026',
        '027',
        '030',
        '034',
        '035',
        '036',
      ]
      /* id: {
        [Op.not]: '002' && '003' ,
        [Op.notLike]: '003',
        [Op.notLike]: '006',
        [Op.notLike]: '009',
        [Op.notLike]: '018',
        [Op.notLike]: '019',
        [Op.notLike]: '020',
        [Op.notLike]: '021',
        [Op.notLike]: '022',
        [Op.notLike]: '024',
        [Op.notLike]: '028',
        [Op.notLike]: '029',
        [Op.notLike]: '031',
        [Op.notLike]: '032',
      }, */
    }
  });
  return instalaciones;
};

module.exports = {
  find,
};
