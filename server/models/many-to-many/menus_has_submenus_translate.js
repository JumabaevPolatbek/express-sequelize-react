module.exports = (sequelize, DataTypes, Model) => {
	class MenuSubMenusTranslate extends Model {}

	const model = MenuSubMenusTranslate.init(
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				allowNull: false,
				primaryKey: true,
			},
			menu_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			submenu_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			language_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			post_id: {
				type: DataTypes.INTEGER,
				allowNull: true,
			},
		},
		{
			sequelize,
			modelName: 'MenuSubmenuTranslate',
			timestamps: false,
			tableName: 'menus_has_submenus_translate',
		}
	);
	return model;
};
