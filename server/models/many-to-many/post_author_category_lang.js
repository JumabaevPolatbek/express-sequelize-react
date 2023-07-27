module.exports = (sequelize, DataTypes, Model) => {
	class PostTranslateHasCategoryAuthor extends Model {}

	const model = PostTranslateHasCategoryAuthor.init(
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			category_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			post_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			language_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			user_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			meta_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: 'categories_has_posts_translate',
			timestamps: false,
			tableName: 'categories_has_posts_translate',
		}
	);
	return model;
};
