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
