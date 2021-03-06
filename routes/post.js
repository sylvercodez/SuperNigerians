const express = require('express');

const router = express.Router();

const {userPost} = require('../controllers/post')
const {
    postView
} = require('../controllers/post');


router.get('/posts', postView);
router.post('/new', userPost);


module.exports = router;
