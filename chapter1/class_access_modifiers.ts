class OrderDetail12 {
	public product: Product;
	public quantity: number;

	public getTotal12(discount: number): number {
		const priceWithoutDiscount = this.product.price * this.quantity;
		const discountAmount = priceWithoutDiscount * discount;
		return priceWithoutDiscount - discountAmount;
	}
}
