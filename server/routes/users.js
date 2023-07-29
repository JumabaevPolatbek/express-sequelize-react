const router = require('express').Router();
const getUsers = require('../controllers/users');
const users = require('../db.js').users;
//get users

router.get('/', async (req, res) => {
	try {
		const result = await users.findAll({
			where: {},
			include: [
				{
					association: 'Details',
				},
			],
		});
		res.status(200).json(result);
	} catch (error) {
		res.status(400).json({ message: error });
	}
});

module.exports = router;
