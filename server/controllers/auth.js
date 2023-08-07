const user = require('../models/index').users_table;
const bcrypt = require('bcrypt');
const secretKey = 'secret-key';
const salt = 10;
const jwt = require('jsonwebtoken');
const generateToken = (userId) => {
    const payload = {
        userId,
    };
    return jwt.sign(payload, secretKey, { expiresIn: '24h' });
};
module.exports = async (req, res) => {
    try {
        const { username, password } = req.body;
        const result = await user.findOne({
            where: {
                username: username,
            },
        });
        if (!result) {
            res.status(401).json({ message: username + ' user is not found' });
        }
        const validPass = bcrypt.compareSync(password, result.password);
        if (!validPass) {
            return res.status(401).json({
                message: 'Login or password is not correct',
            });
        }
        const token = generateToken(result.id);
        return res.status(200).json({ token: token });
    } catch (error) {
        return res.status(400).json({ message: 'Error authorization' });
    }
};
