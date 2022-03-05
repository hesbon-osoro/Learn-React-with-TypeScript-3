let firstName: string;
setTimeout(() => {
	firstName = 'Fred';
	console.log(`firstName in callback ${firstName}`);
}, 1000);
console.log(`firstName after callback ${firstName}`);
