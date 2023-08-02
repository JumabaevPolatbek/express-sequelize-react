const userRolesPermissinos = require('../models/index').userRolesPermission;
const roles = require('../models/index').roleHasPermissions;
const users = require('../models/index').users_table;
const permissions = require('../models/index').permissions;
const role = require('../models/index').roles;
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
                    as: 'roles',
                    include: [
                        {
                            model: role,
                        },
                        {
                            model: permissions,
                        },
                    ],
                },
            ],
            attributes: {
                exclude: ['user_id', 'role_id'],
            },
        });
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
};
