const { DataTypes, Model } = require("sequelize");

const EXTENSION_ITEM_TABLE = "t121_mc_items_extensiones";

const ExtensionItemSchema = {
  id: {
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
  },
};

class ExtensionItem extends Model {
  static associate(models) {
    this.belongsTo(models.Item, {
      foreignKey: "itemId",
      as: "item",
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: EXTENSION_ITEM_TABLE,
      modelName: "ExtensionItem",
      timestamps: false,
    };
  }
}

module.exports = {
  ExtensionItem,
  ExtensionItemSchema,
  EXTENSION_ITEM_TABLE,
};
