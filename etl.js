import { getCoffeeApi, getBeerApi } from "./fetchData.js";
import { transformCoffeeData, transformBeerData } from "./transformData.js";
import { beerDescription } from "./description.js";

export const transformAllCoffeeData = async () => {
	const rawCoffeeData = await getCoffeeApi();

	return await Promise.all(
		await rawCoffeeData.filter((data) => {
			return ((typeof (data.id) === 'number') && data.id <= 20)
		}).map(async (data) => {
			return await transformCoffeeData(data)
		})
	)
}

export const transformAllBeerData = async () => {
	const rawBeerData = await getBeerApi();

	return await rawBeerData.filter((data) => {
		return (typeof (data.id) === 'number')
	}).map((data) => {
		return transformBeerData(data)
	}).map((data) => {
		for (let key in beerDescription) {
			if (data.name.includes(key)) {
				data.description = beerDescription[key]
			}
		}
		return data;
	})
}

export const transformAllData = async () => {
	const allData = (await Promise.all(
		[].concat(
			await transformAllCoffeeData(),
			await transformAllBeerData()
		)
	));

	return allData.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating))
}
