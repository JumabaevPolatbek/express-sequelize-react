const createRolePermission = require('../db/roles/createRolePermission');

module.exports = async (req, res) => {
    try {
        const result = createRolePermission(req.body);
        res.status(200).json({ message: req.body.roleName + ' has created' });
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
};
