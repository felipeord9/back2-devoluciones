const { DataTypes, Model } = require("sequelize");

const INSTALACION_TABLE = "t157_mc_instalaciones";

const InstalacionSchema = {

  //avances
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: "f157_id",
  },
  descripcionInsta:{
    type: DataTypes.INTEGER,
    field: "f157_descripcion",
  },
  /* CCinstalacion:{
    type: DataTypes.STRING,
    field: "f157_rowid_bodega",
  } */

};

class Instalacion extends Model {
  static associate(models) {
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: INSTALACION_TABLE,
      modelName: "Instalacion",
      timestamps: false,
    };
  }
}

module.exports = {
  Instalacion,
  InstalacionSchema,
  INSTALACION_TABLE,
};
