const {
	Sequelize,
	DataTypes,
	Model,
} = require('sequelize');

const sequelize = new Sequelize(
	'newspaper',
	'root',
	'Admin12345',
	{
		host: 'localhost',
		dialect: 'mysql',
	}
);
sequelize
	.authenticate()
	.then(() => {
		console.log('connected..');
	})
	.catch((err) => {
		console.log('Error' + err);
	});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
//images
db.images = require('./models/images.js')(
	sequelize,
	DataTypes,
	Model
);

//users
db.users = require('./models/users.js')(
	sequelize,
	DataTypes,
	Model
);
//user details
db.userDetails = require('./models/users_detail')(
	sequelize,
	DataTypes,
	Model
);
db.users.hasOne(db.userDetails, {
	foreignKey: 'user_id',
	as: 'Details',
});
// db.images.hasMany(db.userDetails);
db.userDetails.belongsTo(db.users, {
	foreignKey: 'id',
});
db.images.hasMany(db.userDetails, {
	foreignKey: 'images',
	as: 'Images',
});
db.userDetails.belongsTo(db.images, {
	foreignKey: 'images',
	as: 'Images',
});
// db.userDetails.belongsTo(db.images);
db.sequelize.sync({ force: true }).then(() => {
	console.log('yes re-sync done!');
});
module.exports = db;
