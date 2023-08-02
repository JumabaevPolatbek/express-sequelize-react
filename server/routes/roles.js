const router = require('express').Router();
const getRolesPermissions = require('../controllers/getRolesPermissions');
const getUsersRoles = require('../controllers/getUsersRoles');
const roleAdd = require('../controllers/roleAdd');

//role and permission create
router.post('/add', roleAdd);
//role and permission get all
router.get('/', getRolesPermissions);
// users role
router.get('/users', getUsersRoles);
module.exports = router;
