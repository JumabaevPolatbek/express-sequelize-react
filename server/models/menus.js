module.exports = (sequelize, DataTypes, Model) => {
	class Menus extends Model {}

	const model = Menus.init(
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
				allowNull: false,
			},
			title: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			slug: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			url: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			content: {
				type: DataTypes.STRING,
				allowNull: true,
			},
		},
		{
			sequelize,
			modelName: 'menus',
			timestamps: false,
			tableName: 'menus',
		}
	);
	return model;
};
