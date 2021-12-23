interface Product1 {
	name: string;
	price: number;
}
interface OrderDetail1 {
	product: Product1;
	quantity: number;
	getTotal(number): number;
}

// getTotal() is a method signature.
// It does not specify anything about how the total is calculated

const table1: Product1 = {
	name: 'Table',
	price: 100,
};
const tableOrder1: OrderDetail1 = {
	product: table1,
	quantity: 2,
	getTotal(discount: number): number {
		const priceWithoutDiscount = this.product.price * this.quantity;
		const discountAmount = priceWithoutDiscount * discount;
		return priceWithoutDiscount - discountAmount;
	},
};
