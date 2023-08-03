const router = require('express').Router();
const signUp = require('../controllers/signUp');
//sign up user

router.post('/signup', signUp);
module.exports = router;
