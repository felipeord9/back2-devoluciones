const { DataTypes, Model } = require("sequelize");
const { INSTALACION_ITEM_TABLE } = require("./margenModel");

const PRECIO_TABLE = "t126_mc_items_precios";

const PrecioSchema = {
  IdPrecio:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: "f126_rowid",
  },
  IdListaPrecio:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: "f126_id_lista_precio",
  },
  IdItem:{
    type: DataTypes.INTEGER,
    field: "f126_rowid_item",
    references: {
      model: INSTALACION_ITEM_TABLE,
      key: "IdItemExt",
    }
  },
  fechaActivacion:{
    type: DataTypes.STRING,
    field: "f126_fecha_activacion",
  },
  precio:{
    type: DataTypes.INTEGER,
    field: "f126_precio",
  },
  precioMinimo:{
    type: DataTypes.INTEGER,
    field: "f126_precio_minimo",
  },
  precioMaximo:{
    type: DataTypes.INTEGER,
    field: "f126_precio_maximo",
  },
  precioSugerido:{
    type: DataTypes.INTEGER,
    field: "f126_precio_sugerido",
  },
  /* IdMovtoInvent:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: "f470_rowid",
  },
  IdFecha:{
    type: DataTypes.STRING,
    field: "f470_id_fecha",
  },
  IdItemExt:{
    type: DataTypes.INTEGER,
    field: "f470_rowid_item_ext",
  },
  IdInstalacion:{
    type: DataTypes.INTEGER,
    field: "f470_id_instalacion",
  },
  IdListaPrecio:{
    type: DataTypes.INTEGER,
    field: "f470_id_lista_precio",
  },
  costoPromedio:{
    type: DataTypes.INTEGER,
    field: "f470_costo_prom_uni",  
  },
  precio:{
    type: DataTypes.INTEGER,
    field: "f470_id_lista_precio",
  },
  precio:{
    type: DataTypes.INTEGER,
    field: "f470_precio_uni",
  } */
};

class PrecioItem extends Model {
  static associate(models) {
    /* this.belongsTo(models.Margen, {
      foreignKey: "IdItemExt",
    }); */
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: PRECIO_TABLE,
      modelName: "Precio",
      timestamps: false,
    };
  }
}

module.exports = {
  PrecioItem,
  PrecioSchema,
  PRECIO_TABLE,
};
