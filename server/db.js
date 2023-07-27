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

//users
db.users = require('./models/users.js')(
	sequelize,
	DataTypes,
	Model
);

//user detail
db.userDetails = require('./models/users_detail')(
	sequelize,
	DataTypes,
	Model
);

//roles
db.roles = require('./models/roles')(
	sequelize,
	DataTypes,
	Model
);

//permissions
db.permissions = require('./models/permissions')(
	sequelize,
	DataTypes,
	Model
);

//roles_has_permissions
db.rolesPermissions =
	require('./models/many-to-many/roles_has_permissions')(
		sequelize,
		DataTypes,
		Model
	);

//user_has_role_permissions
db.UserRoles = require('./models/many-to-many/users_roles')(
	sequelize,
	DataTypes,
	Model
);

//images
db.images = require('./models/images.js')(
	sequelize,
	DataTypes,
	Model
);

//posts
db.posts = require('./models/posts.js')(
	sequelize,
	DataTypes,
	Model
);

//categories
db.categories = require('./models/category')(
	sequelize,
	DataTypes,
	Model
);

//languages
db.languages = require('./models/languages')(
	sequelize,
	DataTypes,
	Model
);

//meta
db.meta = require('./models/meta')(
	sequelize,
	DataTypes,
	Model
);

//menus
db.menus = require('./models/menus')(
	sequelize,
	DataTypes,
	Model
);

//submenus
db.subMenus = require('./models/submenu')(
	sequelize,
	DataTypes,
	Model
);

//other images table relationship many to many
db.otherImages =
	require('./models/many-to-many/other_images')(
		sequelize,
		DataTypes,
		Model
	);

//menu has submenus translate table relationship many to many
db.menusHasSubmenuTranslate =
	require('./models/many-to-many/menus_has_submenus_translate')(
		sequelize,
		DataTypes,
		Model
	);
//post has author category translate table relationship many to many
db.postAuthorHasCategoryTranslate =
	require('./models/many-to-many/post_author_category_lang')(
		sequelize,
		DataTypes,
		Model
	);
db.sequelize.sync({ force: false }).then(() => {
	console.log('yes re-sync done!');
});

// Realtionships

// One to One
db.users.hasOne(db.userDetails, {
	foreignKey: 'id',
});
db.userDetails.belongsTo(db.users);
//one to many
db.images.hasMany(db.posts, {
	foreignKey: 'main_image',
});
db.posts.belongsTo(db.images);
// many to many
//roles permissions
db.roles.belongsToMany(db.permissions, {
	through: db.rolesPermissions,
});
db.permissions.belongsToMany(db.roles, {
	through: db.rolesPermissions,
});
module.exports = db;
