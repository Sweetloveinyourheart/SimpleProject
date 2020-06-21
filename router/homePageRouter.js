const router = require('express-promise-router')();
const { latestProduct } = require('../controller/homepage');

router.route('/home/latest')
    .get(latestProduct)
module.exports = router