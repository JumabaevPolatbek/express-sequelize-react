const createUser = require('../utils/users/createUser');

module.exports = async (req, res) => {
	try {
		await createUser(req.body)
			.then((result) =>
				res.status(200).json({
					message:
						req.body.username + ' has added',
				})
			)
			.catch((error) => res.status(400).json(error));
	} catch (error) {
		console.log(error);
		res.status(400).json(error.msg);
	}
};
