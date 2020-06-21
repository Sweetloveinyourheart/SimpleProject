const router = require('express-promise-router')();
const { validateBody, schema } = require('../helper/productValidation');
const {  createNewProduct, updateAProduct, removeAProduct, findProduct } = require('../controller/dashboard');

router.route('/dashboard/add')
    .post(validateBody(schema.productSchema), createNewProduct)
router.route('/dashboard/update/:id')
    .patch(updateAProduct)
router.route('/dashboard/remove/:id')
    .delete(removeAProduct)
router.route('/dashboard/find')
    .get(findProduct)
module.exports = router 