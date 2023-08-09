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
				as: 'user',
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
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			first_name: {
				type: DataTypes.STRING,
				allowNull: true,
				defaultValue: null,
			},
			last_name: {
				type: DataTypes.STRING,
				allowNull: true,
				defaultValue: null,
			},
			email: {
				type: DataTypes.STRING(60),
				unique: true,
				allowNull: false,
				validate: {
					isEmail: true,
				},
			},
			info: {
				type: DataTypes.STRING,
				allowNull: true,
				defaultValue: null,
			},
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
