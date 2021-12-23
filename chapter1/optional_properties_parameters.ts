interface OrderDetail2 {
	product: Product;
	quantity: number;
	dateAdded?: Date;
	getTotal(discount?: number): number;
}
