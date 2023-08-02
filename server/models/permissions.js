'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class permissions extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsToMany(models.roles, {
                as: 'roleAsPermission',
                through: 'roleHasPermissions',
                foreignKey: {
                    name: 'permission_id',
                    allowNull: false,
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            });
        }
    }
    permissions.init(
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            create: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            read: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: true,
            },
            update: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            delete: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            is_admin: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
        },
        {
            sequelize,
            modelName: 'permissions',
            timestamps: false,
        }
    );
    return permissions;
};
