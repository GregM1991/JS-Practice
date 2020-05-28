const colors = [ 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'indigo', 'violet' ];

const container = document.querySelector('#boxes');

const printColor = function() {
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
