const { DataTypes, Model } = require("sequelize");
const { TERCERO_TABLE } = require("./terceroModel");

const CLIENTE_TABLE = "t201_mm_clientes";

const ClienteSchema = {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    field: "f201_id_sucursal",
  },
  descripcion: {
    type: DataTypes.STRING,
    field: "f201_descripcion_sucursal",
  },
  estado: {
    type: DataTypes.INTEGER,
    field: "f201_ind_estado_activo",
  },
  idCo: {
    type: DataTypes.STRING,
    field: "f201_id_co_factura"
  },
  idTercero: {
    type: DataTypes.INTEGER,
    field: "f201_rowid_tercero",
    references: {
      model: TERCERO_TABLE,
      key: "id",
    },
  },
  idVendedor: {
    type: DataTypes.INTEGER,
    field: "f201_id_vendedor",
  },
};

class Cliente extends Model {
  static associate(models) {
    this.belongsTo(models.Tercero, {
      foreignKey: "idTercero",
    });
    this.belongsTo(models.Vendedor, {
      foreignKey: "idVendedor",
      as: 'vendedor'
    });
    this.belongsTo(models.Agencia, {
      foreignKey: "idCo",
      as: "co"
    })
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: CLIENTE_TABLE,
      modelName: "Cliente",
      timestamps: false,
    };
  }
}

module.exports = {
  Cliente,
  ClienteSchema,
  CLIENTE_TABLE,
};
