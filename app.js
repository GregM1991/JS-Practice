// const allLis = document.querySelectorAll('li');
// const colors = [ 'red', 'orange', 'yellow', 'green', 'blue', 'purple' ];

// allLis.forEach((li, i) => {
// 	const color = colors[i];
// 	li.style.color = color;
// });

// const h1 = document.querySelector('h1');

// const todo = document.querySelector('#todos .todo');

// todo.style.color = 'gray';
// todo.style.textDecoration = 'line-through';
// todo.style.opacity = '0.50';

const newImg = document.createElement('img');
newImg.src =
	'https://images.unsplash.com/photo-1587613754760-cd9a285831b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80';
newImg.style.width = '300px';

document.body.appendChild(newImg);

const newLink = document.createElement('a');
newLink.innerText = 'Mr. Bubs Video - CLICK MEEE';
newLink.href = 'https://youtu.be/5qap5aO4i9A';

const firstP = document.querySelector('p');
firstP.appendChild(newLink);
