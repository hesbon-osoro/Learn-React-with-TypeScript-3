class Product6 {
	name: string;
	price: number;
}

class OrderDetail6 {
	product: Product;
	quantity: number;

	getTotal6(discount: number): number {
		const priceWithoutDiscount = this.product.price * this.quantity;
		const discountAmount = priceWithoutDiscount * discount;
		return priceWithoutDiscount - discountAmount;
	}
}

const table6 = new Product6();

table6.name = 'Table';
table6.price = 100;

const orderDetail6 = new OrderDetail6();
orderDetail6.product = table6;
orderDetail6.quantity = 2;

const total6 = orderDetail6.getTotal6(0.1);

console.log(total6);
