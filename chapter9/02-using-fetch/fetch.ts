// Basic get request

fetch('https://jsonplaceholder.typicode.com/posts')
	.then(res => res.json())
	.then(data => console.log(data));

// To check the response status of the response
fetch('https://jsonplaceholder.typicode.com/posts').then(res =>
	console.log(res.status, res.ok)
);

// Handling errors
fetch('https://jsonplaceholder.typicode.com/posts')
	.then(res => res.json())
	.then(data => console.log(data))
	.catch(err => console.log(err));
