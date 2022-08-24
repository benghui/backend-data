import express from "express";
import dotenv from "dotenv";
import routes from "./routes/routes.js"

dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

const app = express();
const port = process.env.PORT || 3000;

app.use('/', routes)

app.listen(port, () => console.log(`AHOY listening on PORT ${port}`));
