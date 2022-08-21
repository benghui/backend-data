import { getCoffeeApi } from "./fetchData.js";
import { transformCoffeeData } from "./transformData.js";

export const transformAllCoffeeData = async () => {
	const coffeeData = await getCoffeeApi();

	return await Promise.all(
		await coffeeData.map(async (data) => {
			return await transformCoffeeData(data);
		})
	)
}
