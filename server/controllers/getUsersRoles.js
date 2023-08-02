const userRolesPermissinos = require('../models/index').userRolesPermission;
const roles = require('../models/index').rolesHasPermissions;
const users = require('../models/index').users_table;
module.exports = async (req, res) => {
    try {
        const result = await userRolesPermissinos.findAll({
            include: [
                {
                    model: users,
                    as: 'user',
                },
                {
                    model: roles,
                    // as: 'user_role',
                },
            ],
            attributes: {
                exclude: ['user_id'],
            },
        });
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
};
