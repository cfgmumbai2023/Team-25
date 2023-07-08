const express = require('express');
const commentRouter = express.Router();
const {getComment, createComment} = require('../controllers/comment');

commentRouter.get('/', getComment);
commentRouter.post('/', createComment);

module.exports = commentRouter;