const languageTable = require('../../models/index').languages;

module.exports = async (body) => {
    try {
        const { langName, country, isoCode639 } = body;
        const result = await languageTable.create({
            name: langName,
            country: country,
            iso_639_code: isoCode639,
        });
        return result;
    } catch (error) {
        console.log(error);
        return error;
    }
};
