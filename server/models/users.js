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
				type: DataTypes.STRING,
				allowNull: false,
				primaryKey: true,
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
		}
	);

	return model;
};
