const router = require('express').Router();
// const getUsersRoles = require('../controllers/getUsersRoles');
const signUp = require('../controllers/signUp');
//sign up user

router.post('/signup', signUp);
// router.get('/role', getUsersRoles);
module.exports = router;
