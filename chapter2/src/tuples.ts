let product: [string, number];

product = ['Apple', 10];

let flag: [string, boolean];
flag = ['active', false];

let last3scores: [string, number, number, number];
last3scores = ['Tom', 10, 20, 30];

let point: [number, number, number];
point = [100, 200, 100];

// accessing tuple elements as array elements
console.log(product[0]);
console.log(product[1]);

// using for loop
for (const l in last3scores) {
	if (l) {
		console.log(last3scores[l]);
	}
}

// using forEach array function
last3scores.forEach(el => console.log(el));
