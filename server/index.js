const express = require('express');
const db = require('./models/index');
const app = express();
const roles = require('./routes/roles');
const languages = require('./routes/languages');
app.use(express.json());
const authRoute = require('./routes/authRoute');
//roles
app.use('/role', roles);
//login
app.use('/', authRoute);
//languages
app.use('/lang', languages);
app.listen(3000, async () => {
	try {
		console.log(
			'Server is running... and connected DB'
		);
		await db.sequelize.authenticate();
	} catch (error) {
		// console.log('server is running...');
		console.log(error);
	}
});
