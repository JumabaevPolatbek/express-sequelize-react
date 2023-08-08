const express = require('express');
const db = require('./models/index');
const app = express();
const bgcrypt = require('bcrypt');
const salt = 10;
const roles = require('./routes/roles');
const users = require('./routes/users');
const languages = require('./routes/languages');
app.use(express.json());
const authRoute = require('./routes/authRoute');
// app.get('/useradd', async (req, res) => {
//     try {
//         const result = await db.userDetails.findAll();
//         res.status(200).json(result);
//     } catch (error) {
//         console.log(error);
//     }
// });
//roles
app.use('/role', roles);
//users
app.use('/users', users);
//login
app.use('/', authRoute);
//languages
app.use('/lang', languages);
app.listen(3000, async () => {
    try {
        console.log('Server is running... and connected DB');
        await db.sequelize.authenticate();
    } catch (error) {
        // console.log('server is running...');
        console.log(error);
    }
});
