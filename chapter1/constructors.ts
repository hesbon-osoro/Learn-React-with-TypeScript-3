interface Product8 {
	name: string;
	price: number;
}

interface IOrderDetail8 {
	product: Product8;
	quantity: number;
}
class OrderDetail8 implements IOrderDetail8 {
	product: Product8;
	quantity: number;

	constructor(public product8: Product8, public quantity8: number = 1) {
		this.product = product8;
		this.quantity = quantity8;
	}

	getTotal7(discount: number): number {
		const priceWithoutDiscount = this.product8.price * this.quantity8;
		const discountAmount = priceWithoutDiscount * discount;
		return priceWithoutDiscount - discountAmount;
	}
}

const orderDetail8 = new OrderDetail8(table1, 2);

const orderDetail9 = new OrderDetail8(table1);
