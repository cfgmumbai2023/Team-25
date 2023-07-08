const express = require('express');
const commentRouter = express.Router();
const {getComment, createComment} = require('../controllers/comment');

commentRouter.get('/comment', getComment);
commentRouter.post('/comment', createComment);

export default commentRouter;