
const express = require('express')
const router = express.Router()
const userRouter = require('./user.route');
const postRouter = require('./post.route');
const loggerMdw = require('./../middlewares/logger.mdw')
const {requireAPIKey} = require('./../middlewares/apiKey.mdw')
const methodMdw = require('./../middlewares/method.mdw')
router.use(loggerMdw)
router.use(methodMdw)
router.use('/user', userRouter)
router.use('/post', requireAPIKey, postRouter)

module.exports = router
