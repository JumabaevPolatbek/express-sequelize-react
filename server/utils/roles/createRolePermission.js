const Role = require('../../models/index').roles;
const Permissions = require('../../models/index').permissions;

module.exports = async (body) => {
    try {
        if (body.permissions) {
            const role = await Role.create({
                name: body.roleName,
            });
            const permissions = await Permissions.create({
                create: body.permissions.create,
                read: body.permissions.read,
                update: body.permissions.update,
                delete: body.permissions.delete,
            });
            const rolePermissions = await role.addPermissions(permissions);
            return rolePermissions;
        }
        const role = await Role.create({
            name: body.roleName,
        });
        const permissions = await Permissions.create();
        const rolePermissions = await role.addPermissions(permissions);
        return rolePermissions;
    } catch (error) {
        console.log(error);
    }
};
