const JWT = require('jsonwebtoken')
const { JWT_SECRET } = require('../passport/config')
const User = require('./../models/user')

const signToken = user => {
    return JWT.sign({
        iss: 'TynxCode',
        sub: user._id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() + 1)
    }, JWT_SECRET)
}

module.exports = {
    signUp: async (req, res, next) => {
        try {
            const { username, password } = req.value.body
            
            const userExist = await User.findOne({username})
            if(userExist) {
                res.status(403).json({
                    success: false,
                    error: 'User is already in use'
                })
            }
            const newUser = new User({
                username,
                password
            })
            newUser.save()
            const token = signToken(newUser)
            res.cookie('access_token', token, {
                httpOnly: true
            })
            res.status(200).json({
                success: true,
                error: null
            })
        } catch (error) {
            res.status(404).json({
                success: false,
                error
            })
        }
    },
    signIn: async (req, res, next) => {
        try {
            const token = signToken(req.user)
            res.cookie('access_token', token, { httpOnly: true })
            res.status(200).json({
                success: true,
                error: null
            })
        } catch (error) {
            res.status(404).json({
                success: false,
                error
            })
        }
    },
    secret: (req, res, next) => {
        res.status(200).json("Hiihihihi !!~~~")
    }
}