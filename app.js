const colors = [ 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'indigo', 'violet' ];

const container = document.querySelector('#boxes');
const input = document.querySelector('#username');
const addItemInput = document.querySelector('#addItem');
const itemsUL = document.querySelector('#items');

input.addEventListener('keydown', function(e) {
	console.log('down');
});
input.addEventListener('keyup', function(e) {
	console.log('up');
});

const printColor = function(evt) {
	console.log(evt);
	const h1 = document.querySelector('h1');
	h1.style.color = this.style.backgroundColor;
	console.log(this.style.backgroundColor);
};

for (let color of colors) {
	const box = document.createElement('div');
	box.style.backgroundColor = color;
	box.classList.add('box');
	container.appendChild(box);
	box.addEventListener('click', printColor);
}

addItemInput.addEventListener('keypress', function(e) {
	if (e.key === 'Enter') {
		if (!this.value) return;
		const newItemText = this.value;
		const newItem = document.createElement('li');
		newItem.innerText = newItemText;
		itemsUL.appendChild(newItem);
		this.value = '';
	}
});
