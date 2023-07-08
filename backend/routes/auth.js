const express = require('express');
const router = express.Router();
const { signup, signin, refresh, logout } = require('../controllers/auth');

router.post('/signup', signup);
router.post('/signin', signin);  
router.post('/refresh', refresh);
router.post('/logout', logout);

module.exports = router;