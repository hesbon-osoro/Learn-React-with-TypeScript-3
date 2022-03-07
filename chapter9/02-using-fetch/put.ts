fetch('https://jsonplaceholder.typicode.com/posts/1', {
	method: 'PUT',
	headers: {
		'Content-Type': 'application/json',
	},
	body: JSON.stringify({
		title: 'Corrected post',
		body: 'This is a corrected post about ...',
		userId: 1,
	}),
})
	.then(res => {
		console.log(res.status);
		return res.json();
	})
	.then(data => console.log(data));
