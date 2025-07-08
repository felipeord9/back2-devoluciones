const { DataTypes, Model } = require("sequelize");

const AGENCIA_TABLE = "t285_co_centro_op";

const AgenciaSchema = {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    field: 'f285_id'
  },
  descripcion: {
    type: DataTypes.STRING,
    field: 'f285_descripcion'
  },
  idContacto: {
    type: DataTypes.INTEGER,
    field: 'f285_rowid_contacto'
  }
}

class Agencia extends Model {
  static associate(models) {
    this.belongsTo(models.Contacto, {
      foreignKey: "idContacto",
      as: 'contacto'
    })
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: AGENCIA_TABLE,
      modelName: "Agencia",
      timestamps: false
    }
  }
}

module.exports = {
  Agencia,
  AgenciaSchema,
  AGENCIA_TABLE
}