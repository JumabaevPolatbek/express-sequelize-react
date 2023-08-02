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
            this.hasMany(models.user_details, {
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                as: 'images',
            });
        }
    }
    images.init(
        {
            name: DataTypes.STRING,
            path: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'images',
        }
    );
    return images;
};
