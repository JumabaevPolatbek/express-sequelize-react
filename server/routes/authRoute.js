const router = require('express').Router();
const auth = require('../controllers/auth');


router.post('/login', auth);

module.exports = router;
