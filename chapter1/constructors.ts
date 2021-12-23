class OrderDetail8 implements IOrderDetail {
	product: Product7;
	quantity: number;

	constructor(product: Product7, quantity: number) {
		this.product = product;
		this.quantity = quantity;
	}

	getTotal7(discount: number): number {
		const priceWithoutDiscount = this.product.price * this.quantity;
		const discountAmount = priceWithoutDiscount * discount;
		return priceWithoutDiscount - discountAmount;
	}
}
