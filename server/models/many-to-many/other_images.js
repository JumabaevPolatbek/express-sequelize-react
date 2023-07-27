module.exports = (sequelize, DataTypes, Model) => {
	class OtherImages extends Model {}

	const model = OtherImages.init(
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				allowNull: false,
				primaryKey: true,
			},
			post_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			image_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: 'other_images',
			timestamps: false,
			tableName: 'other_images',
		}
	);
	return model;
};
