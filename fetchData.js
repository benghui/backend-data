const coffeeApi = "https://api.sampleapis.com/coffee/hot";
const beerApi = "https://api.sampleapis.com/beers/ale";

export const getCoffeeApi = async () => {
	return await fetch(coffeeApi).then(res => res.json())
}

export const getBeerApi = async () => {
	return await fetch(beerApi).then(res => res.json())
}
