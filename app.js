const btn = document.querySelector('button');

// btnClicker.onclick = function() {
// 	console.log('You clicked me go away');
// };

btn.addEventListener('mouseover', () => {
	console.log('Moused over me');
	const height = Math.floor(Math.random() * window.innerHeight);
	const width = Math.floor(Math.random() * window.innerWidth);
	btn.style.left = `${width}px`;
	btn.style.top = `${height}px`;
});

btn.addEventListener('click', () => {
	btn.innerText = 'You Got Me';
	document.body.style.backgroundColor = 'green';
});
