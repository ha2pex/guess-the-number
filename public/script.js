const newButton = document.createElement('button');
const newInput = document.createElement('input');
const body = document.getElementsByTagName('body')[0];
const button = document.getElementsByTagName('button')[0];

button.addEventListener('click', function() {
	newButton.innerText = 'Try';
	newButton.id = 'submit';
	
	newInput.placeholder = 'Enter a number from 0 to 99';
	newInput.type = 'number';
	newInput.id = 'number';
	
	let number = getRandomInt(100);
	body.appendChild(newInput);
	body.appendChild(newButton);
}

const input = document.getElementById('number').value;
const message = document.createElement('span');

document.getElementById('submit').addEventListener('click', function() {
	if (input == number) {
		message.innerText = 'Well done!';
	} else {
		message.innerText = 'Try again.';
	}
	body.appendChild(message);
}
