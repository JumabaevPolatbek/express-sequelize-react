'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class languages extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	languages.init(
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			country: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			iso_639_code: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					max: 3,
					notNull: {
						msg: 'Please enter your iso 639 code',
					},
				},
			},
			createdAt: DataTypes.DATE,
			updatedAt: DataTypes.DATE,
		},
		{
			sequelize,
			modelName: 'languages',
		}
	);
	return languages;
};
