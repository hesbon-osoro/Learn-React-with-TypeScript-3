type GetTotal = (discount: number) => number;

type Product5 = {
	name: string;
	price: number;
};

type OrderDetail5 = {
	product: Product5;
	quantity: number;
	getTotal: (discount: number) => number;
};

const table5: Product5 = {
	name: 'Table',
	price: 100,
};

const orderDetail5: OrderDetail5 = {
	product: table5,
	quantity: 2,
	getTotal(discount: number): number {
		const priceWithoutDiscount = this.product.price * this.quantity;
		const discountAmount = priceWithoutDiscount * discount;
		return priceWithoutDiscount - discountAmount;
	},
};
