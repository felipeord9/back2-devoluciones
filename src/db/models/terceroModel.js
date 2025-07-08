const { DataTypes, Model } = require("sequelize");

const TERCERO_TABLE = "t200_mm_terceros";

const TerceroSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: "f200_rowid",
  },
  razonSocial: {
    type: DataTypes.STRING,
    field: "f200_razon_social",
  },
  nit: {
    type: DataTypes.STRING,
    field: "f200_nit",
  },
  estado: {
    type: DataTypes.INTEGER,
    field: "f200_ind_estado",
  },
  indicadorCliente: {
    type: DataTypes.SMALLINT,
    field: "f200_ind_cliente",
  },
  idContacto: {
    type: DataTypes.INTEGER,
    field: "f200_rowid_contacto",
  },
};

class Tercero extends Model {
  static associate(models) {
    this.belongsTo(models.Contacto, {
      foreignKey: "idContacto",
      as: 'contacto'
    });
    this.hasMany(models.Cliente, {
      foreignKey: "idTercero",
      as: "sucursales",
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: TERCERO_TABLE,
      modelName: "Tercero",
      timestamps: false,
    };
  }
}

module.exports = {
  Tercero,
  TerceroSchema,
  TERCERO_TABLE,
};
