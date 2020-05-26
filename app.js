const btnClicker = document.querySelector('#clicker');

// btnClicker.onclick = function() {
// 	console.log('You clicked me go away');
// };

btnClicker.addEventListener('click', () => {
	alert('Clicked!!');
});

btnClicker.addEventListener('click', () => {
	console.log('Clicked!!');
});

btnClicker.addEventListener('mouseover', () => {
	btnClicker.innerText = 'STOP TOUCHING ME';
});

btnClicker.addEventListener('mouseout', () => {
	btnClicker.innerText = 'Click Me!';
});

window.addEventListener('scroll', () => {
	console.log('STOP SCROLLING!');
});
