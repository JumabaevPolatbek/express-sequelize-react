module.exports = (sequelize, DataTypes, Model) => {
	class Users extends Model {}
	const model = Users.init(
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				allowNull: false,
				primaryKey: true,
			},
			username: {
				type: DataTypes.STRING(55),
				allowNull: false,
				unique: true,
			},
			password_hash: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			refreshToken: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			sequelize: sequelize,
			timestamps: false,
			modelName: 'users',
			tableName: 'users',
		}
	);

	return model;
};
