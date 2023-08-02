const getRolesPermission = require('../db/roles/getRolesPermission');

module.exports = async (req, res) => {
    try {
        const result = await getRolesPermission();
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
};
