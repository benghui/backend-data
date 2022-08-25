const coffeeApi = "https://api.sampleapis.com/coffee/hot";
const beerApi = "https://api.sampleapis.com/beers/ale";
const coffeeImageApi = "https://coffee.alexflipnote.dev/random.json"

export const getCoffeeApi = async () => {
	return await fetch(coffeeApi).then(res => res.json())
}

export const getBeerApi = async () => {
	return await fetch(beerApi).then(res => res.json())
}

export const getCoffeeImage = async () => {
	return await fetch(coffeeImageApi).then(res => res.json())
}
