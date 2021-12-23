class Product9 {
	name: string;
	price: number;
}

interface DiscountCode1 {
	code: string;
	percentage: number;
}

class ProductWithDiscountCodes extends Product9 {
	discountCodes: DiscountCode1[];
}
