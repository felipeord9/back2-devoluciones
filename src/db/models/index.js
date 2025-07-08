const { Cliente, ClienteSchema } = require("./clienteModel");
const { Tercero, TerceroSchema } = require("./terceroModel");
const { Item, ItemSchema } = require("./itemModel");
const { ExtensionItem, ExtensionItemSchema } = require("./extensionItemModel");
const { Vendedor, VendedorSchema } = require("./vendedorModel");
const { Contacto, ContactoSchema } = require("./contactoModel");
const { Agencia, AgenciaSchema } = require("./agenciaModel");
const { InstalacionItem, InstalacionItemSchema } = require("./margenModel");
const { BodegaItem, BodegaItemSchema } = require("./bodegaModel");
const { Instalacion, InstalacionSchema } = require("./instalacionModel");
const { PrecioItem, PrecioSchema } = require("./preciosModel");

function setupModels(sequelize) {
  Contacto.init(ContactoSchema, Contacto.config(sequelize));
  Agencia.init(AgenciaSchema, Agencia.config(sequelize))
  Cliente.init(ClienteSchema, Cliente.config(sequelize));
  Tercero.init(TerceroSchema, Tercero.config(sequelize));
  Item.init(ItemSchema, Item.config(sequelize));
  ExtensionItem.init(ExtensionItemSchema, ExtensionItem.config(sequelize));
  Vendedor.init(VendedorSchema, Vendedor.config(sequelize));
  InstalacionItem.init(InstalacionItemSchema, InstalacionItem.config(sequelize));
  BodegaItem.init(BodegaItemSchema, BodegaItem.config(sequelize));
  Instalacion.init(InstalacionSchema, Instalacion.config(sequelize));
  PrecioItem.init(PrecioSchema, PrecioItem.config(sequelize));

  Contacto.associate(sequelize.models);
  Agencia.associate(sequelize.models)
  Tercero.associate(sequelize.models);
  Cliente.associate(sequelize.models);
  ExtensionItem.associate(sequelize.models);
  Item.associate(sequelize.models);
  Vendedor.associate(sequelize.models);
  InstalacionItem.associate(sequelize.models);
  BodegaItem.associate(sequelize.models);
  Instalacion.associate(sequelize.models);
  PrecioItem.associate(sequelize.models);

}

module.exports = setupModels;
