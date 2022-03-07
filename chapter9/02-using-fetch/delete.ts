fetch('https://jsonplaceholder.typicode.com/posts/1', {
	method: 'DELETE',
}).then(res => console.log(res.status));
