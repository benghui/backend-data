import express from "express";
import dotenv from "dotenv";
import { transformAllCoffeeData, transformAllBeerData, transformAllData } from "./etl.js";
import { catchAsyncErrors } from "./catchAsyncMiddleware.js";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

const app = express();
const port = process.env.PORT || 3000;

app.get('/drinks', catchAsyncErrors(async (req, res, next) => {
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
		res.status(400).send("Server encountered an error with query type")
	}
}))

app.listen(port, () => console.log(`AHOY listening on PORT ${port}`));
