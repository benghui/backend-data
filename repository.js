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

export const queryOneEmployee = async (id) => {
	let query = `SELECT * FROM employees WHERE id = ?`;
	try {
		const [rows, fields] = await db.query(query, [id])
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

export const createNewEmployee = async (data) => {
	let insertQuery = `INSERT INTO employees (id, name, days_worked, cafe)
		VALUES (?, ?, ?, ?)`;
	try {
		const [rows, fields] = await db.execute(insertQuery,
			[
				data.id,
				data.name.toLowerCase(),
				data.days_worked,
				data.cafe.toLowerCase()
			]);
		return rows
	} catch (err) {
		return err
	}
}
