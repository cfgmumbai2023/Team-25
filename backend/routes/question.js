const express = require('express');
const questionRouter = express.Router();
const {getQuestion, createQuestion} = require('../controllers/question');

questionRouter.get('/question', getQuestion);
questionRouter.post('/question', createQuestion);

export default questionRouter;