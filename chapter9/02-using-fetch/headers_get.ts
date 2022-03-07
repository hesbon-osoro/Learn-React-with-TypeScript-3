fetch('https://jsonplaceholder.typicode.com/posts', {
	headers: {
		'Content-Type': 'application/json',
		Authorization: 'bearer bearer-token',
	},
})
	.then(res => {
		console.log(res.status);
        return res.json()
	})
	.then(data => console.log(data));
