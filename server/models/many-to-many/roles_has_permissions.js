module.exports = (sequelize, DataTypes, Model) => {
	class RolesPermission extends Model {}

	const model = RolesPermission.init(
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				allowNull: false,
				primaryKey: true,
			},
			role_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			permission_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: 'RolesPermission',
			timestamps: false,
			tableName: 'roles_has_permissions',
		}
	);
	return model;
};
