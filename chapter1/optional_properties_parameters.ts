interface OrderDetail2 {
	product: Product;
	quantity: number;
	dateAdded?: Date;
	getTotal(discount?: number): number;
}

const tableOrder2: OrderDetail2 = {
	product: table1,
	quantity: 2,
	getTotal(discount?: number): number {
		const priceWithoutDiscount = this.product.price * this.quantity;
		const discountAmount = priceWithoutDiscount * discount;
		return priceWithoutDiscount - discountAmount;
	},
};
