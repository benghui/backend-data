import Joi from "joi";

export const cafeValidation = Joi.object().keys({
	id: Joi.string()
		.guid({
			version: [
				'uuidv4'
			]
		})
		.required(),
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

export const employeeValidation = Joi.object().keys({
	id: Joi.string()
		.alphanum()
		.pattern(/^[U][I][\S]{7}$/),
	name: Joi.string()
		.required(),
	days_worked: Joi.number()
		.integer()
		.required(),
	cafe: Joi.string()
		.required()
})
