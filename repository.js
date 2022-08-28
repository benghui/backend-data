import { dbConn as db } from './config/db.config.js';

export const queryCafeLocation = async (location) => {
	let query = `SELECT * FROM cafes WHERE location = ? ORDER BY employees DESC`;
	try {
		const [rows, fields] = await db.query(query, [location])
		return rows
	} catch (err) {
		return err
	}
}

export const queryCafe = async () => {
	let query = `SELECT * FROM cafes ORDER BY employees DESC`;
	try {
		const [rows, fields] = await db.query(query)
		return rows
	} catch (err) {
		return err
	}
}

export const queryEmployees = async () => {
	let query = `SELECT * FROM employees ORDER BY days_worked DESC`;
	try {
		const [rows, fields] = await db.query(query)
		return rows
	} catch (err) {
		return err
	}
}

export const createNewCafe = async (data) => {
	let insertQuery = `INSERT INTO cafes (id, name, description, employees, logo, location)
		VALUES (?, ?, ?, ?, ?, ?)`;
	try {
		const [rows, fields] = await db.execute(insertQuery,
			[
				data.id,
				data.name.toLowerCase(),
				data.description.toLowerCase(),
				data.employees,
				data.logo.toLowerCase(),
				data.location.toLowerCase()
			]);
		return rows
	} catch (err) {
		return err
	}
}
