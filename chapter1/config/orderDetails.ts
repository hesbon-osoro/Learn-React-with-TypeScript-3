export interface Product {
	name: string;
	price: number;
}

export class OrderDetail {
	product: Product;
	quantity: number;
	getTotal(discount: number): number {
		const priceWithoutDiscount = this.product.price * this.quantity;
		const discountAmount = priceWithoutDiscount * discount;
		return priceWithoutDiscount - discountAmount;
	}
}
