const router = require('express').Router();
const auth = require('../controllers/auth');
const signUp = require('../controllers/signUp');
//login
router.post('/login', auth);
//signup
router.post('/signup',signUp);

module.exports = router;
