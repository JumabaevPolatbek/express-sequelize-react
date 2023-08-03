const deleteRole = require('../utils/roles/deleteRole');

module.exports = async (req, res) => {
	try {
		await deleteRole(req.params.role_id)
			.then((result) =>
				res.status(200).json({
					message: 'Role has deleted',
				})
			)
			.catch((error) => res.status(400).json(error));
	} catch (error) {
		console.log(error);
		res.status(400).json(error);
	}
};
