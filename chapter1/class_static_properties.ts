class OrderDetail14 {
	product: Product;
	quantity: number;

	// this method has no access for the class properties
	// static getTotal(discount: number): number{
	//     const priceWithoutDiscount = this.product.price * this.quantity;
	//     const discountAmount = priceWithoutDiscount * discount;
	//     return priceWithoutDiscount - discountAmount;
	// }

	// to make it work we pass the dependencies as parameters
	static getTotal(price: number, quantity: number, discount: number): number {
		const priceWithoutDiscount = price * quantity;
		const discountAmount = priceWithoutDiscount * discount;
		return priceWithoutDiscount - discountAmount;
	}
}
