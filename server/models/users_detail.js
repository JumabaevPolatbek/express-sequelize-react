module.exports = (sequelize, DataTypes, Model) => {
	class UsersDetail extends Model {}

	const model = UsersDetail.init(
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
			},
			firstName: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			lastName: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING(60),
				unique: true,
				allowNull: false,
			},
			info: {
				type: DataTypes.BLOB,
				allowNull: true,
			},
			createdAt: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			updatedAt: {
				type: DataTypes.DATE,
				allowNull: false,
			},
		},
		{
			sequelize: sequelize,
			modelName: 'Users',
			timestamps: false,
			tableName: 'users_detail',
		}
	);

	return model;
};
