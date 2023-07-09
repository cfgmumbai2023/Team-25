const express = require('express');
const router = express.Router();
const { signup, signin, refresh, logout, getUser } = require('../controllers/auth');

router.post('/signup', signup);
router.post('/signin', signin);  
router.get('/:id', getUser);
router.post('/refresh', refresh);
router.post('/logout', logout);

module.exports = router;