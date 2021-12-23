interface Product7 {
	name: string;
	price: number;
}

interface IOrderDetail {
	product: Product7;
	quantity: number;
	getTotal7(discount: number): number;
}

class OrderDetail7 implements IOrderDetail {
	product: Product7;
	quantity: number;
	getTotal7(discount: number): number {
		const priceWithoutDiscount = this.product.price * this.quantity;
		const discountAmount = priceWithoutDiscount * discount;
		return priceWithoutDiscount - discountAmount;
	}
}
