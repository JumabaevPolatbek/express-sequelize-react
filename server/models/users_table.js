'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class users_table extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			this.belongsTo(models.images);
			this.belongsToMany(models.roleHasPermissions, {
				through: 'userRolesPermission',
				foreignKey: {
					name: 'user_id',
					allowNull: false,
				},
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			});
		}
	}
	users_table.init(
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			username: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					max: 40,
					isIn: {
						args: [['en']],
						msg: 'Letters must be in English',
					},
					notNull: {
						msg: 'Please enter your name',
					},
				},
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			refresh_token: DataTypes.STRING,
			first_name: DataTypes.STRING,
			last_name: DataTypes.STRING,
			email: {
				type: DataTypes.STRING(60),
				unique: true,
				allowNull: false,
				validate: {
					isEmail: true,
				},
			},
			info: DataTypes.STRING,
			imageId: {
				type: DataTypes.INTEGER,
				allowNull: true,
			},
			createdAt: DataTypes.DATE,
			updatedAt: DataTypes.DATE,
		},
		{
			sequelize,
			modelName: 'users_table',
		}
	);
	return users_table;
};
