const getUsersWithRoles = require('../db/roles/getUsersWithRoles');

module.exports = async (req, res) => {
    try {
        const result = await getUsersWithRoles();
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
};
