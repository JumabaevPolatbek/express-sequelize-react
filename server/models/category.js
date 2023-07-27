module.exports = (sequelize, DataTypes, Model) => {
	class Category extends Model {}

	const model = Category.init(
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
				allowNull: false,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: 'categories',
			timestamps: false,
			tableName: 'categories',
		}
	);
	return model;
};
