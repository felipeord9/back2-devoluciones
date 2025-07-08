const { DataTypes, Model } = require("sequelize");

const VENDEDOR_TABLE = "t210_mm_vendedores";

const VendedorSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: 'f210_id'
  },
  idTercero: {
    type: DataTypes.INTEGER,
    field: "f210_rowid_tercero"
  }
}

class Vendedor extends Model {
  static associate(models) {
    this.belongsTo(models.Tercero, {
      foreignKey: 'idTercero',
      as: 'tercero'
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: VENDEDOR_TABLE,
      modelName: "Vendedor",
      timestamps: false,
    };
  }
}

module.exports = {
  Vendedor,
  VendedorSchema,
  VENDEDOR_TABLE
}