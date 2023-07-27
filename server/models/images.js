module.exports = (sequelize, DataTypes, Model) => {
	class Images extends Model {}

	const model = Images.init(
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
			path: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			createdAt: {
				type: DataTypes.DATE,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: 'images',
			timestamps: false,
			tableName: 'images',
		}
	);
	return model;
};
