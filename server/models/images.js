'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class images extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.hasMany(models.users_table, {
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                as: 'images',
            });
            this.hasMany(models.posts, {
                foreignKey: {
                    name: 'imageId',
                    allowNull: false,
                    primaryKey: true,
                },
                as: 'PostMainImage',
            });
            this.belongsToMany(models.posts, {
                through: 'otherImages',
                foreignKey: 'image_id',
                otherKey: 'post_id',
            });
        }
    }
    images.init(
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            path: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: 'images',
        }
    );
    return images;
};
