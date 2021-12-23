class Product9 {
	name: string;
	price: number;
}

interface DiscountCode1 {
	code: string;
	percentage: number;
}

class ProductWithDiscountCodes1 extends Product9 {
	discountCodes: DiscountCode1[];
}

const table9 = new ProductWithDiscountCodes1();

table9.name = 'Table';
table9.price = 100;
table9.discountCodes = [
	{ code: 'SUMMER10', percentage: 0.1 },
	{ code: 'BFRI', percentage: 0.2 },
];
