import { v4 as uuid } from 'uuid';
import { getCoffeeImage } from './fetchData.js';

const genRand = (min, max, decimals) => {
	return (Math.random() * (max - min) + min).toFixed(decimals);
}

export const transformCoffeeData = async (coffeeData) => {
	return await {
		name: coffeeData.title,
		price: '$' + (genRand(8, 20, 2)),
		rating: (genRand(1, 5, 3)),
		description: coffeeData.description,
		image: (await getCoffeeImage()).file,
		id: uuid()
	}
}

export const transformBeerData = (beerData) => {
	return {
		name: beerData.name,
		price: beerData.price,
		rating: beerData.rating.average.toFixed(3),
		// description: somefunction,
		image: beerData.image,
		id: uuid()
	}
}
