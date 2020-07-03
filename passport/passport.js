const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const LocalStrategy = require('passport-local').Strategy
const { JWT_SECRET } = require('./config')

const User = require('../models/user')

const cookieExtractor = req => {
    var token = null
    if (req && req.cookies) {
        token = req.cookies['access_token']
    }
    return token
}
passport.use(new JwtStrategy({
    jwtFromRequest: cookieExtractor,
    secretOrKey: JWT_SECRET,
    passReqToCallback: true
}, async (req, payload, done) => {
    try {
        const user = await User.findById(payload.sub)
        if (!user) {
            return done(null, false)
        }
        req.user = user
        done(null, user)
    } catch (error) {
        done(error, false)
    }
}))
passport.use(new LocalStrategy({
    usernameField: 'username'
}, async (username, password, done) => {
    try {
        const user = await User.findOne({ username })
        if (!user) {
            return done(null, false)
        }
        const isMatch = await user.isValidPassword(password)
        if(!isMatch) {
            return done(null, false)
        }
        done(null, user)

    } catch (error) {
        done(error, false)
    }
}))