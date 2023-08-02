const Role = require('../models/index').roles;
const Permissions = require('../models/index').permissions;
module.exports = async (req, res) => {
	try {
        // console.log(req.body.roleName)
		const role = await Role.create({
			name: req.body.roleName,
		});
		const permissions = await Permissions.create();
		const rolePermissions = await role.addPermissions(
			permissions
		);
		res.status(200).json(rolePermissions);
	} catch (err) {
		console.log(err);
		res.status(400).json(err);
	}
};
