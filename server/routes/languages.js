const languageAdd = require('../controllers/languageAdd');

const router = require('express').Router();

router.post('/add', languageAdd);

module.exports = router;
