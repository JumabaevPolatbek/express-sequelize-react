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
            this.hasOne(models.user_details, {
                as: 'user_details',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                foreignKey: {
                    name: 'user_id',
                    allowNull: false,
                    primaryKey: true,
                },
            });
            this.belongsToMany(models.RoleHasPermissions, {
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
                        msg: 'Буквы должны быть только на англиском',
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
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
                validate: {
                    isEmail: true,
                    
                }
            },
            info: DataTypes.STRING,
            image_id: {
                type: DataTypes.INTEGER,
            },
        },
        {
            sequelize,
            modelName: 'users_table',
            timestamps: false,
        }
    );
    return users_table;
};
