class OrderDetail12 {
	public product: Product;
	public quantity: number;
	private deleted: boolean;

	public delete(): void {
		this.deleted = true;
	}

	public getTotal12(discount: number): number {
		const priceWithoutDiscount = this.product.price * this.quantity;
		const discountAmount = priceWithoutDiscount * discount;
		return priceWithoutDiscount - discountAmount;
	}
}

const orderDetail12 = new OrderDetail12();

// this is not possible
// an instance of class cannot access private class properties
// orderDetail12.deleted = true;