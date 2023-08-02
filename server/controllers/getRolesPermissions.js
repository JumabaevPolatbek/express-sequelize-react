const RolesPermissions = require('../models/index').roleHasPermissions;
const roles = require('../models/index').roles;
const permissions = require('../models/index').permissions;
module.exports = async (req, res) => {
    try {
        const result = await roles.findAll({
            where: {},
            include: {
                model: permissions,
                through: {
                    attributes: [],
                },
            },
        });
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
};
