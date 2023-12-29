const express = require('express')
const router = express.Router();
const {getAllPosts, getPostsBy, createAPost, createPosts} = require('../controllers/post.controller')
const {requireAPIKeyByParams} = require('./../middlewares/apiKey.mdw')
// CRUD
router.get('/all/:apiKey', requireAPIKeyByParams, getAllPosts)

router.post('/search', getPostsBy)

router.post('/insertOne', createAPost)

router.post('/createMany', createPosts)

// update by uname/fname/gender (uname)
router.put('/update/:id', )

// delete by uname/fname/gender (uname)
router.delete('/delete/:id', )

module.exports = router;