fetch('https://jsonplaceholder.typicode.com/posts/1', {
	method: 'PATCH',
	headers: {
		'Content-Type': 'application/json',
	},
	body: JSON.stringify({
		title: 'Corrected post',
	}),
})
	.then(res => {
		console.log(res.status);
		return res.json();
	})
	.then(data => console.log(data));
