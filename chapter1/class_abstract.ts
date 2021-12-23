abstract class Product11 {
	name: string;
	price: number;
	abstract delete(): void;
}

// this is not allowed
// const c = new Product11();

class Food extends Product11 {
	deleted: boolean;
	constructor(public bestBefore: Date) {
		super();
	}
	delete() {
		this.deleted = true;
	}
}

const bread = new Food(new Date(2023, 5, 14));
