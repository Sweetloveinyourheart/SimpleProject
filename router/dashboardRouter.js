const router = require('express-promise-router')();
const { validateBody, schema } = require('../helper/productValidation');
const {  createNewProduct, updateAProduct, removeAProduct, findProduct, findProductById } = require('../controller/dashboard');
const passport = require('passport')
require('../passport/passport')
const passpostJWT = passport.authenticate('jwt', {session: false})


router.route('/dashboard/add')
    .post(validateBody(schema.productSchema), passpostJWT, createNewProduct)
router.route('/dashboard/update/:id')
    .patch(passpostJWT, updateAProduct)
router.route('/dashboard/remove/:id')
    .delete(passpostJWT, removeAProduct)
router.route('/dashboard/find')
    .get(passpostJWT, findProduct)
router.route('/dashboard/findbyid')
    .get(passpostJWT, findProductById)
module.exports = router 