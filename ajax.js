console.log('hellow world');

// const firstReq = new XMLHttpRequest();
// firstReq.addEventListener('load', function() {
// 	console.log('IT WORKED');
// 	const data = JSON.parse(this.responseText);
// 	for (let planet of data.results) {
// 		console.log(planet.name);
// 	}
// });
// firstReq.addEventListener('error', () => {
// 	console.log('ERROR!!!');
// });
// firstReq.open('GET', 'https://swapi.dev/api/planets/');
// firstReq.send();
// console.log('Request sent');

// fetch('https://swapi.dev/api/planetssad21/')
// 	.then((response) => {
// 		if (!response.ok) {
// 			throw new Error(`Status Code Error: ${response.status}`);
// 		} else {
// 			response.json().then((data) => {
// 				for (let planet of data.results) {
// 					console.log(planet.name);
// 				}
// 			});
// 		}
// 	})
// 	.catch((err) => {
// 		console.log('Something went wrong');
// 		console.log(err);
// 	});

const fetchNextPlanets = (url = 'https://swapi.dev/api/planets/') => {
	return axios.get(url);
};

const printPlanets = ({ data }) => {
	for (let planet of data.results) {
		console.log(planet.name);
	}
	return Promise.resolve(data.next);
};

fetchNextPlanets()
	.then(printPlanets)
	.then(fetchNextPlanets)
	.then(printPlanets)
	.then(fetchNextPlanets)
	.then(printPlanets)
	.then(fetchNextPlanets)
	.then(printPlanets)
	.catch((err) => {
		console.log('ERROR', err);
	});
