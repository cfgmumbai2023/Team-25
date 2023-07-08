const express = require('express');
const questionRouter = express.Router();
const {getQuestion, createQuestion} = require('../controllers/question');

questionRouter.get('/', getQuestion);
questionRouter.post('/', createQuestion);

module.exports = questionRouter;