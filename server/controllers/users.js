const users = require('../utils/users/getUsers');

const getUsers = async (req, res) => {
	try {
		const result = await users();
		console.log(result);
		res.status(200).json(result);
	} catch (error) {
		console.log('Error');
		res.status(400).json({
			message: error,
		});
	}
};
module.exports = getUsers;
