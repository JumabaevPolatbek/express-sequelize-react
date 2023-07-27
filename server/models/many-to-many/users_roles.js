module.exports = (sequelize, DataTypes, Model) => {
	class UserRoles extends Model {}

	const model = UserRoles.init(
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				allowNull: false,
				primaryKey: true,
			},
			user_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			role_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: 'UserRoles',
			timestamps: false,
			tableName: 'users_roles',
		}
	);
	return model;
};
