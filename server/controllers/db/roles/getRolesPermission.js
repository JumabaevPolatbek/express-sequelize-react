const roles = require('../../../models/index').roles
const permissions = require('../../../models/index').permissions
const rolesHasPermissions=require('../../../models/index').rolesHasPermissions

module.exports = async () => {
    const result = await rolesHasPermissions.findAll({
        include:
    })
}