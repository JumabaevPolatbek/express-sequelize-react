const users = require('../../models/index').users_table;
const usersHasRolePermissions =
	require('../../models/index').userRolesPermission;
const roles = require('../../models/index').roles;
const permissions =
	require('../../models/index').permissions;
const rolesHasPermissions =
	require('../../models/index').roleHasPermissions;
module.exports = async (userId) => {
	try {
		const result =
			await usersHasRolePermissions.findOne({
				where: {
					user_id: userId,
				},
				include: [
					{
						model: users,
						as: 'user',
					},
					{
						model: rolesHasPermissions,
						as: 'usersRole',
						include: [
							{
								model: roles,
							},
							{
								model: permissions,
							},
						],
						attributes: {
							exclude: [
								'role_id',
								'permission_id',
							],
						},
						order: [
							[
								{
									model: rolesHasPermissions,
								},
							],
						],
					},
				],
				attributes: {
					exclude: ['role_id', 'user_id'],
				},
			});
		return result;
	} catch (error) {
		console.log(error);
	}
};
