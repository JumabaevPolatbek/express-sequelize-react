const { getRoles } = require('../controllers/roles');
const roles = require('../db').roles;
const router = require('express').Router();
const createRoles =
	require('../controllers/roles').createRoles;

//create roles route

router.post('/', async (req, res) => {
	try {
		const body = req.body;
		await createRoles(body).then((re) =>
			res.status(200).json({
				message: 'Role has added',
			})
		);
	} catch (error) {
		console.log(error);
		res.status(400).json({
			message: error,
		});
	}
});
router.get('/', async (req, res) => {
	try {
		const result = await roles.findAll({
			where: {},
			include: [
				{
					association: 'RolePermission',
				},
			],
		});
		console.log(result);
		res.status(200).json(result);
	} catch (error) {
		console.log(error);
		res.status(400).json({
			message: error,
		});
	}
});
module.exports = router;
