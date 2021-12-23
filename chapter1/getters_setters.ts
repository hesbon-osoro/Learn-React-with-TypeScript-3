class Product13 {
	name: string;
	private _price: number;

	get price(): number {
		return this._price || 0;
	}
	set price(value: number) {
		if (value < 0) {
			value = 0;
		}
		this._price = value;
	}
}

const table13 = new Product13();
table13.name = 'Table';
table13.price = -100;
console.log(table13.price);

table13.price = 100;
console.log(table13.price);
