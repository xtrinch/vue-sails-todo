/**
 * TodoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var validate = require('sails-hook-validation-ev/lib/validate')

module.exports = {
	create1: async function(req, res) {
		validate(req)
		const errors = await req.getValidationResult();
		if (!errors.isEmpty()) {
	      return res.status(400).json({ errors: errors.array() });
	    }
	    return res.ok()
	}  
};

