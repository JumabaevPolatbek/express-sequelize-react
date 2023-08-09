const languageAdd = require('../controllers/languageAdd');
const adminMiddleware = require('../middleware/adminMiddleware');
const router = require('express').Router();

router.post('/add', adminMiddleware, languageAdd);

module.exports = router;
