const { DataTypes, Model } = require("sequelize");

const CONTACTO_TABLE = "t015_mm_contactos";

const ContactoSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: "f015_rowid",
  },
  telefono: {
    type: DataTypes.STRING,
    field: "f015_telefono",
  },
  email: {
    type: DataTypes.STRING,
    field: "f015_email",
  },
};

class Contacto extends Model {
  static associate(models) {
    //
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: CONTACTO_TABLE,
      modelName: "Contacto",
      timestamps: false,
    };
  }
}

module.exports = {
  Contacto,
  ContactoSchema,
  CONTACTO_TABLE,
};
