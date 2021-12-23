abstract class Product11 {
	name: string;
	price: number;
}

// this is not allowed
// const c = new Product11();

class Food extends Product11 {
	constructor(public bestBefore: Date) {
		super();
	}
}

const bread = new Food(new Date(2023, 5, 14));
