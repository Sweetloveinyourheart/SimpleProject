const router = require('express-promise-router')();
const { latestProduct, mostExpensiveProduct } = require('../controller/homepage');

router.route('/home/latest')
    .get(latestProduct)
router.route('/home/mostexpensive')
    .get(mostExpensiveProduct)
module.exports = router