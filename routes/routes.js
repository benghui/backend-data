import { transformAllCoffeeData, transformAllBeerData, transformAllData } from "../pipeline/etl.js";
import { validate } from "../middleware/validateMiddleware.js";
import { cafeValidation, employeeValidation } from "../utils/validation.js";
import { catchAsyncErrors } from "../middleware/catchAsyncMiddleware.js";
import { createNewCafe, createNewEmployee, queryCafe, queryCafeLocation, queryEmployees, queryOneEmployee } from "../utils/repository.js";
import express from "express";

const router = express.Router();

router.get('/drinks', catchAsyncErrors(async (req, res, next) => {
	if (req.query.type === 'coffee') {
		const data = await transformAllCoffeeData();
		res.send(data);
	} else if (req.query.type === 'beer') {
		const data = await transformAllBeerData();
		res.send(data);
	} else if (Object.keys(req.query).length === 0) {
		const data = await transformAllData();
		res.send(data);
	} else {
		res.status(400).send("Server encountered an error with query type");
	}
}))

router.get('/cafes', catchAsyncErrors(async (req, res, next) => {
	let location = req.query.location;

	if (Object.keys(req.query).length === 0) {
		const data = await queryCafe();
		res.send(data);
	} else if (location) {
		const data = await queryCafeLocation(location);
		res.send(data);
	} else {
		res.status(400).send("Server encountered an error with query");
	}
}))

router.get('/cafes/employees', catchAsyncErrors(async (req, res, next) => {
	const data = await queryEmployees();
	res.send(data);
}))

router.post('/cafe', validate(cafeValidation), catchAsyncErrors(async (req, res, next) => {
	const data = await createNewCafe(req.body)

	if (data.affectedRows === 1) {
		res.status(201).send();
	} else {
		res.status(400).send("Server encountered an error");
	}
}))

router.post('/cafe/employee', validate(employeeValidation), catchAsyncErrors(async (req, res, next) => {
	let id = req.body.id;

	const exist = await queryOneEmployee(id);

	if (exist.length === 0) {
		const data = await createNewEmployee(req.body)
		if (data.affectedRows === 1) {
			res.status(201).send();
		} else {
			res.status(400).send("Server encountered an error");
		}
	} else {
		res.status(400).send("Cannot create duplicate");
	}

}))

export default router;
