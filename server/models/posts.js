'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class posts extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			this.belongsTo(models.images);
			this.belongsToMany(models.images, {
				through: 'otherImages',
				foreignKey: 'post_id',
				otherKey: 'image_id',
			});
		}
	}
	posts.init(
		{
			title: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			content: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			createdAt: DataTypes.DATE,
			updatedAt: DataTypes.DATE,
		},
		{
			sequelize,
			modelName: 'posts',
		}
	);
	return posts;
};
