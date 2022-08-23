import mysql from "mysql2";

export const dbConn = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE
});

dbConn.connect((err) => {
	if (err) throw err;
	console.log("Database Connected!");
});
