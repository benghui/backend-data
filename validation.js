import Joi from "joi";

export const cafeValidation = Joi.object().keys({
	id: Joi.string()
		.guid({
			version: [
				'uuidv4'
			]
		}),
	name: Joi.string()
		.required(),
	description: Joi.string()
		.required(),
	employees: Joi.number()
		.integer()
		.required(),
	logo: Joi.string()
		.required(),
	location: Joi.string()
		.required(),
})

