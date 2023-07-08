const express = require('express');
const commentRouter = express.Router();

commentRouter.get('/comment', getComment);
commentRouter.post('/comment', createComment);

export default commentRouter;