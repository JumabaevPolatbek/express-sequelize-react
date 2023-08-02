const router = require('express').Router();
const getRolesPermissions = require('../controllers/getRolesPermissions');
const roleAdd = require('../controllers/roleAdd');

//role and permission create
router.post('/add', roleAdd);
//role and permission get all
router.get('/',getRolesPermissions)
module.exports = router;
