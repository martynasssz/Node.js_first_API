const express = require('express');

const feedController = require('../cntrollers/feed');

const router = express.Router();

//this request //GET /feed/posts will be handle by this controller feedController.getPosts
router.get('/posts', feedController.getPosts);

module.exports = router;

