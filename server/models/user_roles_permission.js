'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class userRolesPermission extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.users_table, {
                foreignKey: 'user_id',
                as: 'user',
            });
            this.belongsTo(models.roleHasPermissions, {
                foreignKey: 'role_id',
                as: 'roles',
            });
        }
    }
    userRolesPermission.init(
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
        },
        {
            sequelize,
            modelName: 'userRolesPermission',
        }
    );
    return userRolesPermission;
};
