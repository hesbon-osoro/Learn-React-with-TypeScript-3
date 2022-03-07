fetch('https://jsonplaceholder.typicode.com/posts', {
	method: 'POST',
	body: JSON.stringify({
		title: 'interesting post',
		body: 'This is an interesting post about ...',
		userId: 1,
	}),
})
	.then(res => {
		console.log(res.status);
		return res.json();
	})
	.then(data => console.log(data));
