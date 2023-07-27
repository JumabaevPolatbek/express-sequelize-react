module.exports = (sequelize, DataTypes, Model) => {
	class SubMenu extends Model {}

	const model = SubMenu.init(
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				allowNull: false,
				primaryKey: true,
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
		},
		{
			sequelize,
			modelName: 'submenus',
			timestamps: false,
			tableName: 'submenus',
		}
	);
	return model;
};
