console.log('hello world');

// function getData() {
// 	const data = axios.get('https://swapi.dev/api/planets/');
// 	console.log(data);
// }

// function greet() {
// 	console.log('Hello');
// }

async function greet() {
	return 'HELLO!';
}
greet().then((val) => {
	console.log(`PROMISE RESOLVED WITH: ${val}`);
});

async function add(x, y) {
	if (typeof x !== 'number' || typeof y !== 'number') {
		throw 'X and Y must be numbers!';
	}
	return x + y;
}

add('e', 'r')
	.then((val) => {
		console.log(`PROMISE RESOLVED WITH ${val}`);
	})
	.catch((err) => {
		console.log('promise rejected with: ', err);
	});
