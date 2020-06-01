console.log('hello world');

// function getData() {
// 	const data = axios.get('https://swapi.dev/api/planets/');
// 	console.log(data);
// }

// function greet() {
// 	console.log('Hello');
// }

// async function greet() {
// 	return 'HELLO!';
// }
// greet().then((val) => {
// 	console.log(`PROMISE RESOLVED WITH: ${val}`);
// });

// async function add(x, y) {
// 	if (typeof x !== 'number' || typeof y !== 'number') {
// 		throw 'X and Y must be numbers!';
// 	}
// 	return x + y;
// }

// add('e', 'r')
// 	.then((val) => {
// 		console.log(`PROMISE RESOLVED WITH ${val}`);
// 	})
// 	.catch((err) => {
// 		console.log('promise rejected with: ', err);
// 	});

// function getPlanets() {
// 	return axios.get('https://swapi.dev/api/planets/');
// }

// getPlanets().then((res) => {
// 	console.log(res.data);
// });

// async function getPlanets() {
// 	try {
// 		const res = await axios.get('https://swapi.dev/api/plavsdnets/');
// 		console.log(res.data);
// 	} catch (e) {
// 		console.log('IN CATCH', e);
// 	}
// }

// getPlanets();

// Sequential requests!
// async function get3Pokemon() {
// 	const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
// 	const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2');
// 	const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3');
// 	console.log(poke1.data);
// 	console.log(poke2.data);
// 	console.log(poke3.data);
// }

async function get3Pokemon() {
	const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
	const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
	const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
	const results = await Promise.all([ prom1, prom2, prom3 ]);
	printPokemon(results);
}

function printPokemon(results) {
	for (let pokemon of results) {
		console.log(pokemon.data.name);
	}
}

get3Pokemon();
