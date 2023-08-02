const roles = require('../../models/index').roles;
const permissions = require('../../models/index').permissions;

module.exports = async () => {
    const result = await roles.findAll({
        include: {
            model: permissions,
            through: {
                attributes: [],
            },
        },
    });
    return result;
};
