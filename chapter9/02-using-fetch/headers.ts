fetch('https://jsonplaceholder.typicode.com/posts', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
		Authorization: 'bearer some-bearer-token',
	},
	body: JSON.stringify({
		title: 'Interesting post',
		body: 'This is an interesting post about ...',
		userId: 1,
	}),
})
	.then(res => {
		console.log(res.status);
		return res.json();
	})
	.then(data => console.log(data));
