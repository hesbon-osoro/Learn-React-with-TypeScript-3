class OrderDetail8 implements IOrderDetail {
	product: Product7;
	quantity: number;

	constructor(product: Product7, quantity: number = 1) {
		this.product = product;
		this.quantity = quantity;
	}

	getTotal7(discount: number): number {
		const priceWithoutDiscount = this.product.price * this.quantity;
		const discountAmount = priceWithoutDiscount * discount;
		return priceWithoutDiscount - discountAmount;
	}
}

const orderDetail8 = new OrderDetail8(table1, 2);

const orderDetail9 = new OrderDetail8(table1);
