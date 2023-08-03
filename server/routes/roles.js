const router = require('express').Router();
const deleteRole = require('../controllers/deleteRole');
const getRolesPermissions = require('../controllers/getRolesPermissions');
const getUsersRoles = require('../controllers/getUsersRoles');
const roleAdd = require('../controllers/roleAdd');

//role and permission create
router.post('/add', roleAdd);
//role and permission get all
router.get('/', getRolesPermissions);
// users role
router.get('/users', getUsersRoles);
// delete role
router.delete('/:role_id', deleteRole);
module.exports = router;
