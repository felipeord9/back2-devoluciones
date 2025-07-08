const { DataTypes, Model } = require("sequelize");

const BODEGA_ITEM_TABLE = "t150_mc_bodegas";

const BodegaItemSchema = {

  //avances
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: "f150_rowid",
  },
  rowId:{
    type: DataTypes.INTEGER,
    field: "f150_id",
  },
  idBodega:{
    type: DataTypes.INTEGER,
    field: "f150_id_co",
  },
  ItemDescripcion:{
    type: DataTypes.STRING,
    field: "f150_descripcion",
  }

};

class BodegaItem extends Model {
  static associate(models) {
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: BODEGA_ITEM_TABLE,
      modelName: "Bodega",
      timestamps: false,
    };
  }
}

module.exports = {
  BodegaItem,
  BodegaItemSchema,
  BODEGA_ITEM_TABLE,
};
