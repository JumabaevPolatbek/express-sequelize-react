module.exports = (sequelize, DataTypes, Model) => {
	class Roles extends Model {}

	const model = Roles.init(
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				allowNull: false,
				primaryKey: true,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: 'Roles',
			timestamps: false,
		}
	);
	return model;
};
