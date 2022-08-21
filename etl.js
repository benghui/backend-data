import { getCoffeeApi, getBeerApi } from "./fetchData.js";
import { transformCoffeeData, transformBeerData } from "./transformData.js";

export const transformAllCoffeeData = async () => {
	const coffeeData = await getCoffeeApi();

	return await Promise.all(
		await coffeeData.map(async (data) => {
			return await transformCoffeeData(data);
		})
	)
}

export const transformAllBeerData = async () => {
	const beerData = await getBeerApi();

	return await beerData.map(data => transformBeerData(data))
}
