const jwt = require('jsonwebtoken');
const secretKey = 'secret-key';

module.exports = async (req, res, next) => {
    if (req.method === 'OPTIONS') {
        next();
    }
    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(400).json({ message: 'User is not authorized' });
        }
        const validate = jwt.verify(token, secretKey);
        req.user = validate;
        next();
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'User is not authorized' });
    }
};
