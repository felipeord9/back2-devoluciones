const { DataTypes, Model } = require("sequelize");

/* const INSTALACION_ITEM_TABLE = "t470_cm_movto_invent"; */
/* const INSTALACION_ITEM_TABLE = "t400_cm_existencia"; */
const INSTALACION_ITEM_TABLE = "t132_mc_items_instalacion";
/* const INSTALACION_ITEM_TABLE = "SE_T150"; */

const InstalacionItemSchema = {
  IdItemExt:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: "f132_rowid_item_ext",
  },
  IdInstalacion:{
    type: DataTypes.INTEGER,
    field: "f132_id_instalacion",
  },
  costoPromedio:{
    type: DataTypes.INTEGER,
    field: "f132_costo_prom_uni",  
  },
  ultimocosto:{
    type: DataTypes.INTEGER,
    field: "f132_ultimo_costo_local",  
  },
  ultimaFecha:{
    type: DataTypes.DATEONLY,
    field: "f132_fecha_ultimo_costo",  
  },
  fechaActualizacion:{
    type: DataTypes.DATEONLY,
    field: "f132_fecha_actualizacion", 
  },
  existencia:{
    type: DataTypes.INTEGER,
    field: "f132_cant_existencia_1",
  }


  /* id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: "f132_rowid_item_ext",
  },
  costo:{
    type: DataTypes.INTEGER,
    field: "f132_costo_prom_uni",
  },
  IdBodega:{
    type: DataTypes.INTEGER,
    field: "f132_mf_rowid_bodega_asigna",
  } */

  //ayuda luis
  /* id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: "f150_id_cia",
  },
  IdBodega:{
    type: DataTypes.INTEGER,
    field: "f150_id_bodega",
  },
  descripcion:{
    type: DataTypes.STRING,
    field: "f150_bodega",
  } */

  //Existencia
  /* id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: "f470_rowid",
  }, */

  //para tabla f400
  /* IdItemExt:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: "f400_rowid_item_ext",
  },
  IdBodega:{
    type: DataTypes.INTEGER,
    field: "f400_rowid_bodega",
  },
  costoPromedio:{
    type: DataTypes.INTEGER,
    field: "f400_costo_prom_uni",  
  }, */


  /* FechaUltimoCOnsumo: {
    type: DataTypes.DATE,
    field: "f400_fecha_ult_consumo_prom",
  }, */

  //avances inventario
  /* id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: "f470_rowid",
  },
  IdItemExt:{
    type: DataTypes.INTEGER,
    field: "f470_rowid_item_ext",
  },
  IdBodega:{
    type: DataTypes.INTEGER,
    field: "f470_rowid_bodega",
  },
  costo:{
    type: DataTypes.INTEGER,
    field: "f470_costo_prom_uni",  
  },
  tipo: {
    type: DataTypes.SMALLINT,
    field: "f470_ind_tipo_item",
  }, */

//viejo
  /* id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: "f121_rowid",
  },
  estado: {
    type: DataTypes.STRING,
    field: "f121_ind_estado",
  },
  itemId: {
    type: DataTypes.INTEGER,
    field: "f121_rowid_item",
  }, */
};

class InstalacionItem extends Model {
  static associate(models) {
    /* this.belongsTo(models.ExtensionItem, {
      foreignKey: "rowId",
      as: "ExtensionItem",
    }); */
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: INSTALACION_ITEM_TABLE,
      modelName: "Margen",
      timestamps: false,
    };
  }
}

module.exports = {
  InstalacionItem,
  InstalacionItemSchema,
  INSTALACION_ITEM_TABLE,
};
