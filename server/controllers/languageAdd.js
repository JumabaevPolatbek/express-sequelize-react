const createLang = require('../utils/languages/createLang');

module.exports = async (req, res) => {
    try {
        const result = await createLang(req.body);
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: error });
    }
};
