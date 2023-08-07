const createRolePermission = require('../utils/roles/createRolePermission');

module.exports = async (req, res) => {
    try {
        await createRolePermission(req.body)
            .then((result) =>
                res.status(200).json({
                    message: req.body.roleName + ' has created',
                })
            )
            .catch((error) => res.status(400).json(error));
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
};
