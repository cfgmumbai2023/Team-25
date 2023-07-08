const express = require('express');
const questionRouter = express.Router();

questionRouter.get('/question', getquestion);
questionRouter.post('/question', createquestion);

export default questionRouter;