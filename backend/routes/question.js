const express = require('express');
const questionRouter = express.Router();

questionRouter.get('/question', getQuestion);
questionRouter.post('/question', createQuestion);

export default questionRouter;