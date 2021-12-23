class Product10 {
	constructor(public name: string, public price: number) {}
}

interface DiscountCode2 {
	code: string;
	percentage: number;
}

class ProductWithDiscountCodes2 extends Product10 {
	constructor(public name: string, public price: number) {
		super(name, price);
	}
	discountCodes: DiscountCode2[];
}
