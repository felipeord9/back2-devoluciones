const express = require('express')
const mailRoutes = require('./mailRoutes')
const ProductRoutes = require('./productRoutes')
const ClientRoutes = require('./clientRoutes')
const SellerRoutes = require('./sellerRoutes')
const OrderRoutes = require('./orderRoutes')
const AgencyRoutes = require('./agencyRoutes')
const MargenRoutes = require('./MargenRoutes')
const BodegaRoutes = require('./bodegaRoutes')
const InstalacionRoutes = require('./instalacionRoutes')
const PrecioRoutes = require('./precioRoutes')

function routerApi(app) {
    const router = express.Router()

    app.use('/api/v1/', router)

    router.use('/mail', mailRoutes)
    router.use('/products', ProductRoutes)
    router.use('/clients', ClientRoutes)
    router.use('/sellers', SellerRoutes)
    router.use('/orders', OrderRoutes)
    router.use('/agencies', AgencyRoutes)
    router.use('/margen', MargenRoutes)
    router.use('/bodega', BodegaRoutes)
    router.use('/instalacion', InstalacionRoutes)
    router.use('/precio', PrecioRoutes)

}

module.exports = routerApi