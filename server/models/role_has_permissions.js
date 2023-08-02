'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class roleHasPermissions extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsToMany(models.users_table, {
                through: 'userRolesPermission',
                foreignKey: {
                    allowNull: false,
                    name: 'role_id',
                },
            });
        }
    }
    roleHasPermissions.init(
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
            modelName: 'RoleHasPermissions',
        }
    );
    return roleHasPermissions;
};
