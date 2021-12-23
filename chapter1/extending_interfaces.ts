interface Product4 {
	name: string;
	price: number;
}

interface DiscountCode {
	code: string;
	percentage: number;
}

interface ProductWithDiscountCodes extends Product4 {
	discountCodes: DiscountCode[];
}

const table4: ProductWithDiscountCodes = {
	name: 'Table',
	price: 100,
	discountCodes: [
		{
			code: 'SUMMER10',
			percentage: 0.1,
		},
		{
			code: 'BFRI',
			percentage: 0.2,
		},
	],
};

/*
Interfaces allow us to make complex but flexible structures types for our TypeScript program to use.
*/
