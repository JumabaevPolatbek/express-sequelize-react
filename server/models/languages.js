module.exports = (sequelize, DataTypes, Model) => {
	class Languages extends Model {}

	const model = Languages.init(
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			country: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			iso_639_code: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: 'languages',
			timestamps: false,
			tableName: 'languages',
		}
	);
	return model;
};
