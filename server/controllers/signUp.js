const User = require('../models/index').users_table;
const rolesHasPermissions = require('../models/index').roleHasPermissions;
const permissions = require('../models/index').permissions;
const roles = require('../models/index').roles;
module.exports = async (req, res) => {
    try {
        const rolesPermissions = await rolesHasPermissions.findOne({
            where: {
                id: 1,
            },
            include: [
                {
                    model: roles,
                },
                {
                    model: permissions,
                },
            ],
            attributes: {
                exclude: ['createdAt', 'updatedAt'],
            },
        });
        const user = await User.create({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
        });
        const result = await user.addRoleHasPermissions(
            rolesPermissions.id,
            user.id
        );
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(400).json(error.msg);
    }
};
