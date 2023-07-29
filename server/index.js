const express = require('express');
const { userDetails, users } = require('./db');
const db = require('./db');
const app = express();
const bgcrypt = require('bcrypt');
const salt = 10;
app.use(express.json());

app.get('/users', async (req, res) => {
	const result = await userDetails.findAll({
		where: {},
		include: [
			{
				model: db.users,
				attributes: ['username', 'refreshToken'],
			},
			{
				association: 'Images',
				attributes: ['path'],
			},
		],
	});
	res.status(200).json({
		user: result,
	});
});
//create user
app.post('/user', async (req, res) => {
	try {
		const {
			username,
			password,
			info,
			firstName,
			lastName,
			email,
		} = req.body;
		var hashPass;
		bgcrypt.hash(
			password,
			salt,
			async (error, hash) => {
				if (error) {
					res.status(401).json({
						message: error,
					});
				}
				const createUser = new users({
					username: username,
					password_hash: hash,
					refreshToken: 'null',
				});
				createUser.save();
				console.log('user_id', createUser.id);
				await createUser.setDetails({
					firstName: firstName,
					lastName: lastName,
					email: email,
					info: 'null',
					createdAt: new Date(),
					updatedAt: new Date(),
					images: 'null',
					user_id: createUser.id,
				});
				res.status(200).json({
					message: username + 'has been added',
				});
			}
		);
	} catch (error) {
		console.log(error);
		res.status(400).json({ message: error });
	}
});
// app.use('/users', users);
// app.use('/role', role);
app.listen(3000, async () => {
	try {
		console.log(
			'Server is running... and connected DB'
		);
	} catch (error) {
		// console.log('server is running...');
		console.log(error);
	}
});
