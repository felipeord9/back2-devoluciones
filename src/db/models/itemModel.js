const { DataTypes, Model } = require("sequelize");

const ITEM_TABLE = "t120_mc_items";

const ItemSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: "f120_rowid",
  },
  codigo: {
    type: DataTypes.STRING,
    field: "f120_referencia",
  },
  descripcion: {
    type: DataTypes.STRING,
    field: "f120_descripcion",
  },
  um: {
    type: DataTypes.STRING,
    field: "f120_id_unidad_inventario",
  },
  indicadorCompra: {
    type: DataTypes.SMALLINT,
    field: "f120_ind_compra",
  },
  indicadorVenta: {
    type: DataTypes.INTEGER,
    field: "f120_ind_venta",
  },
  indicadorManufactura: {
    type: DataTypes.INTEGER,
    field: "f120_ind_manufactura",
  },
  tipo: {
    type: DataTypes.SMALLINT,
    field: "f120_ind_tipo_item",
  },
  tipoInventario: {
    type: DataTypes.INTEGER,
    field: "f120_id_tipo_inv_serv",
  },
};

class Item extends Model {
  static associate(models) {
    //
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: ITEM_TABLE,
      modelName: "Item",
      timestamps: false,
    };
  }
}

module.exports = {
  Item,
  ItemSchema,
  ITEM_TABLE,
};
