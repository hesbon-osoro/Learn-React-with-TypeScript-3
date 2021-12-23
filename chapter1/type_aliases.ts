type GetTotal = (discount: number) => number;

interface OrderDetail5 {
	product: Product;
	quantity: number;
	getTotal: GetTotal;
}
