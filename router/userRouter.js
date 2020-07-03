const router = require('express-promise-router')()
const { signIn, signUp, secret  } = require('./../controller/user')
const { validateBody, schema  } = require('../helper/userValidation')
const passport = require('passport')
require('../passport/passport')

const passpostSignin = passport.authenticate('local', {session: false})
const passpostJWT = passport.authenticate('jwt', {session: false})

router.route('/signup')
    .post(validateBody(schema.userSchema), signUp)
router.route('/signin')
    .post(validateBody(schema.userSchema), passpostSignin, signIn)
router.route('/secret')
    .get(passpostJWT, secret)

module.exports = router