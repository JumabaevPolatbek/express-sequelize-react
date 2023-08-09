const category = require('../../models/index').category;

module.exports = async (body) => {
	try {
        const {categoryName}=body
        
	} catch (error) {
		console.log(error);
		return error;
	}
};
