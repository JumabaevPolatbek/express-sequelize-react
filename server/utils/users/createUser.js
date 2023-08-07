const User = require('../../models/index').users_table;
const bgcrypt = require('bcrypt');
const salt = 10;
module.exports = async (body) => {
	try {
		const {
			username,
			password,
			email,
			rolePermissionId,
		} = body;
		const hasPassword = await bgcrypt.hashSync(password, salt);

		const user = await User.create({
			username: username,
			password: hasPassword,
			email: email,
		});
		const result = await user.addUser(
			rolePermissionId,
			user.id
		);
		return result;
	} catch (error) {
		console.log(error);
	}
};
