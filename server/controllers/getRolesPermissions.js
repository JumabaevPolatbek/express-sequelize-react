const RolesPermissions = require('../models/roles');

module.exports = async (req, res) => {
	try {
		const result = await RolesPermissions.findAll({
			where: {},
		});
		res.status(200).json(result);
	} catch (err) {
		console.log(err);
		res.status(400).json(err);
	}
};
