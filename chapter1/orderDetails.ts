import { Stock } from './product';

class OrderDetail14 {
	product: Stock;
	quantity: number;
	getTotal(discount: number): number {
		const priceWithoutDiscount = this.product.price * this.quantity;
		const discountAmount = priceWithoutDiscount * discount;
		return priceWithoutDiscount - discountAmount;
	}
}
