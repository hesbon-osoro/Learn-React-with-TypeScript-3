let product;
product = ['Apple', 10];
let flag;
flag = ['active', false];
let last3scores;
last3scores = ['Tom', 10, 20, 30];
let point;
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
//# sourceMappingURL=tuples.js.map