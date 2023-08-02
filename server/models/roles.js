'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class roles extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			this.belongsToMany(models.permissions, {
				through: 'roleHasPermissions',
				foreignKey: {
					name: 'role_id',
					allowNull: false,
				},
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			});
		}
	}
	roles.init(
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			name: {
				type: DataTypes.STRING(60),
				unique: true,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: 'roles',
			timestamps: false,
		}
	);
	return roles;
};
