const router = require('express-promise-router')();
const { getProduct, getShirtsProduct, getTrousersProduct, getDressesProduct, getCostumesProduct, getAccessoriesProduct } = require('./../controller/shop');

router.route('/shop/:page')
    .get(getProduct);
router.route('/shop/shirts/:page')
    .get(getShirtsProduct);
router.route('/shop/trouses/:page')
    .get(getTrousersProduct);
router.route('/shop/dresses/:page')
    .get(getDressesProduct);
router.route('/shop/costumes/:page')
    .get(getCostumesProduct);
router.route('/shop/accessories/:page')
    .get(getAccessoriesProduct);
