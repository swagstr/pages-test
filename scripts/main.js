var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/logo.jpg') {
		myImage.setAttribute ('src','images/hat1.jpg');
	} 
	if(mySrc === 'images/hat1.jpg') {
		myImage.setAttribute ('src','images/hat2.jpg');
	}
	if(mySrc === 'images/hat2.jpg') {
		myImage.setAttribute ('src','images/hat3.jpg');
	}
	if(mySrc === 'images/hat3.jpg') {
		myImage.setAttribute ('src','images/logo.jpg');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Welcome Back to LA, ' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Welcome Back to LA, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}