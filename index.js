import express from "express";
import { transformAllCoffeeData } from "./etl.js";

const app = express();
const port = process.env.PORT || 3000;

app.get('/drinks', async (req, res) => {
	if (req.query.type === 'coffee') {
		try {
			const data = await transformAllCoffeeData()
			res.send(data)
		} catch (err) {
			res.status(400).send(err);
		}
	} else if (req.query.type === 'beer') {
		res.send("beer");
	} else if (Object.keys(req.query).length === 0) {
		res.send('coffee beer');
	} else {
		res.send("err")
	}
})

app.listen(port, () => console.log(`AHOY listening on PORT ${port}`));
