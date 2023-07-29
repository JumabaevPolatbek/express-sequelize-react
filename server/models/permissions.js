module.exports = (sequelize, DataTypes, Model) => {
	class Permissions extends Model {}
	const model = Permissions.init(
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
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
		{ sequelize: sequelize, timestamps: false }
	);
	return model;
};
