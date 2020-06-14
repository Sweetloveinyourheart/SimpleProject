const router = require('express-promise-router')();
const { latestProduct,product } = require('./../controller/shop');

router.route('/shop/latest')
    .get(latestProduct)
router.route('/shop/product/:page')
    .get(product)
module.exports = router