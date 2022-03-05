try {
	setTimeout(() => {
		throw new Error('Something went wrong');
	}, 1000);
} catch (ex) {
	console.log(`An error has occurred ${ex}`);
}

// This code doesn't handle errors
