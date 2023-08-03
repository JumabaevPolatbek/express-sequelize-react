const Role = require('../../models/index').roles;

module.exports = async (id) => {
	try {
		const result = await Role.delete({
			where: {
				id: id,
			},
		});
		return result;
	} catch (error) {
		console.log(error);
	}
};
